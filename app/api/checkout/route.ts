
import Stripe from "stripe";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";

import { connectDB } from "@/app/utils/mongoose";
import Simulador from "@/models/Simulador";
import Paquete from "@/models/Paquete";
import Guia from "@/models/Guia";
import Usuario from "@/models/Usuario";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  try {
    // Identificar al comprador mediante Clerk
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Debes iniciar sesión para comprar" },
        { status: 401 }
      );
    }

    // Recibir el producto solicitado
    const { tipoProducto, productoId } = await req.json();

    if (
      !["simulador", "paquete", "guia"].includes(tipoProducto) ||
      typeof productoId !== "string" ||
      !Types.ObjectId.isValid(productoId)
    ) {
      return NextResponse.json(
        { error: "Producto inválido" },
        { status: 400 }
      );
    }

    await connectDB();

    // Verificar que el usuario existe en MongoDB
    const usuario = await Usuario.findOne({ clerkId: userId });

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Buscar el producto en MongoDB
    let producto;

    if (tipoProducto === "simulador") {
      producto = await Simulador.findById(productoId);
    } else if (tipoProducto === "paquete") {
      producto = await Paquete.findOne({
        _id: productoId,
        activo: true,
      });
    } else {
      producto = await Guia.findOne({
        _id: productoId,
        activo: true,
      });
    }

    if (!producto) {
      return NextResponse.json(
        { error: "Producto no disponible" },
        { status: 404 }
      );
    }

    // Obtener y validar el precio en pesos mexicanos
    const precio = producto.precio;

    if (
      typeof precio !== "number" ||
      !Number.isFinite(precio) ||
      precio <= 0 ||
      !Number.isInteger(precio * 100)
    ) {
      return NextResponse.json(
        { error: "Precio del producto inválido" },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://www.simulandum.com"
        : "http://localhost:3000";

    // Crear sesión de pago en Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "mxn",
            unit_amount: Math.round(precio * 100),

            product_data: {
              name: producto.titulo,
              description: producto.descripcion_corta,
              images: [producto.imagen],
            },
          },
          quantity: 1,
        },
      ],

      // Datos necesarios para entregar la compra
      metadata: {
        userId,
        tipoProducto,
        productoId,
      },

      // Redirecciones después del pago
      success_url: `${baseUrl}/plataforma/mis-simuladores`,
      cancel_url: `${baseUrl}/plataforma`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Error al crear sesión de checkout:", err);

    return NextResponse.json(
      { error: "Error creando sesión de pago" },
      { status: 500 }
    );
  }
}
