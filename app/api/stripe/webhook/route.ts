
import Stripe from "stripe";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { Types } from "mongoose";

import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/Usuario";
import Venta from "@/models/Venta";
import Simulador from "@/models/Simulador";
import Paquete from "@/models/Paquete";
import Guia from "@/models/Guia";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

// Agrega los intentos de un simulador al usuario
async function otorgarSimulador(
  user: any,
  simuladorId: string
) {
  const simulador = await Simulador.findById(simuladorId);

  if (!simulador) {
    throw new Error(`Simulador no encontrado: ${simuladorId}`);
  }

  const intentos = simulador.uso_justo;

  if (!Number.isInteger(intentos) || intentos <= 0) {
    throw new Error("Intentos del simulador inválidos");
  }

  const adquirido = user.simuladoresCanjeados.find(
    (item: any) =>
      item.simuladorId.toString() === simuladorId.toString()
  );

  if (adquirido) {
    // Si ya lo tenía, sumamos los nuevos intentos
    adquirido.uso_justo += intentos;
  } else {
    // Si es su primera compra, lo agregamos
    user.simuladoresCanjeados.push({
      simuladorId,
      fecha: new Date(),
      uso_justo: intentos,
    });
  }
}

export async function POST(req: NextRequest) {
  const rawBody = await req.arrayBuffer();
  const signature = (await headers()).get("stripe-signature");

  let event: Stripe.Event;

  try {
    if (!signature) {
      return new Response("Firma faltante", { status: 400 });
    }

    event = stripe.webhooks.constructEvent(
      Buffer.from(rawBody),
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Firma de Stripe inválida:", err);

    return new Response("Firma inválida", {
      status: 400,
    });
  }

  if (event.type !== "checkout.session.completed") {
    return new Response("Evento ignorado", { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Solo entregar productos cuando el pago esté confirmado
  if (session.payment_status !== "paid") {
    return new Response("Pago pendiente", { status: 200 });
  }

  const clerkId = session.metadata?.userId;
  const tipoProducto = session.metadata?.tipoProducto;
  const productoId = session.metadata?.productoId;

  if (
    !clerkId ||
    !tipoProducto ||
    !productoId ||
    !["simulador", "paquete", "guia"].includes(tipoProducto) ||
    !Types.ObjectId.isValid(productoId)
  ) {
    console.error("Metadatos de compra inválidos:", session.id);

    return new Response("Metadatos inválidos", {
      status: 400,
    });
  }

  try {
    await connectDB();

    // Evitar procesar una compra ya registrada
    const ventaExistente = await Venta.findOne({
      stripeSessionId: session.id,
    });

    if (ventaExistente) {
      return new Response("Compra ya procesada", {
        status: 200,
      });
    }

    const user = await User.findOne({ clerkId });

    if (!user) {
      console.error("Usuario no encontrado:", clerkId);

      return new Response("Usuario no encontrado", {
        status: 500,
      });
    }

    // Entregar el producto comprado
    if (tipoProducto === "simulador") {
      await otorgarSimulador(user, productoId);
    }

    if (tipoProducto === "paquete") {
      const paquete = await Paquete.findById(productoId);

      if (!paquete) {
        throw new Error("Paquete no encontrado");
      }

      for (const simuladorId of paquete.simuladores) {
        await otorgarSimulador(user, simuladorId.toString());
      }
    }

    if (tipoProducto === "guia") {
      const guia = await Guia.findById(productoId);

      if (!guia) {
        throw new Error("Guía no encontrada");
      }

      const ahora = new Date();

      const adquirida = user.guiasAdquiridas.find(
        (item: any) =>
          item.guiaId.toString() === productoId
      );

      // Si ya tiene la guía, extender desde su vencimiento
      // vigente; de lo contrario, desde hoy
      const fechaBase =
        adquirida && adquirida.fechaExpiracion > ahora
          ? new Date(adquirida.fechaExpiracion)
          : ahora;

      const fechaExpiracion = new Date(fechaBase);
      fechaExpiracion.setUTCMonth(
        fechaExpiracion.getUTCMonth() + 1
      );

      if (adquirida) {
        adquirida.fechaExpiracion = fechaExpiracion;
      } else {
        user.guiasAdquiridas.push({
          guiaId: productoId,
          fecha: ahora,
          fechaExpiracion,
        });
      }

      // Los simuladores incluidos no caducan
      for (const simuladorId of guia.simuladores) {
        await otorgarSimulador(user, simuladorId.toString());
      }
    }

    // Guardar los accesos del estudiante
    await user.save();

    // Registrar la venta
    await Venta.create({
      userId: user._id,
      clerkId,
      email:
        session.customer_details?.email ||
        session.customer_email ||
        user.email,
      amountPaid: session.amount_total,
      paymentStatus: session.payment_status,
      paymentMethod: session.payment_method_types?.[0],
      stripeSessionId: session.id,
      stripeCreatedAt: new Date(session.created * 1000),
      tipoProducto,
      productoId,
    });

    return new Response("Compra procesada", {
      status: 200,
    });
  } catch (err) {
    console.error("Error procesando compra:", err);

    return new Response("Error interno", {
      status: 500,
    });
  }
}
