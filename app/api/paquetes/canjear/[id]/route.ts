import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/app/utils/mongoose";
import Usuario from "@/models/Usuario";
import Paquete from "@/models/Paquete";
// import Simulador from "@/models/Simulador";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    console.log(id,"iidd")
    const { userId } = await auth();



    if (!userId) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 401 }
      );
    }

    const paqueteId = id;

    const paquete = await Paquete.findById(paqueteId).populate("simuladores");
    if (!paquete) {
      return NextResponse.json({ error: "Paquete no encontrado" }, { status: 404 });
    }

    if (!paquete.activo) {
      return NextResponse.json({ error: "Paquete no disponible" }, { status: 400 });
    }

    const usuario = await Usuario.findOne({ clerkId: userId });
    if (!usuario) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    if (usuario.monedas < paquete.precio) {
      return NextResponse.json(
        { error: "No tienes monedas suficientes" },
        { status: 400 }
      );
    }

    // Cobro del paquete
    usuario.monedas -= paquete.precio;

    // Recorremos simuladores del paquete
    const simuladores = (paquete.simuladores ?? []) as any[];

    for (const sim of simuladores) {
      const simuladorIdStr = sim._id.toString();

      const canje = usuario.simuladoresCanjeados.find(
        (s: any) => s.simuladorId.toString() === simuladorIdStr
      );

      if (canje) {
        // Recarga (suma) de uso justo, NO importa que esté en 0
        canje.uso_justo = (canje.uso_justo || 0) + (sim.uso_justo || 0);
        canje.fecha = new Date();
        // Opcional: acumular monedas pagadas (proporcional). Como aquí pagas paquete,
        // normalmente NO sumes nada por simulador. Lo dejo sin tocar.
      } else {
        usuario.simuladoresCanjeados.push({
          simuladorId: sim._id,
          monedasPagadas: 0, 
          uso_justo: sim.uso_justo || 0,
          fecha: new Date(),
        });
      }
    }

    await usuario.save();

    return NextResponse.json({
      ok: true,
      nuevoSaldo: usuario.monedas,
      paquete,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al canjear paquete" }, { status: 500 });
  }
}