import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/app/utils/mongoose";
import Usuario from "@/models/Usuario";
import Simulador from "@/models/Simulador";

export async function POST(req: Request, { params }) {
  await connectDB();
  const { id } = await params;

  const { userId } = await auth();

  if (!userId)
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 401 }
    );

  const simuladorId = id;

  const simulador = await Simulador.findById(simuladorId);
  if (!simulador)
    return NextResponse.json(
      { error: "Simulador no encontrado" },
      { status: 404 }
    );

  const usuario = await Usuario.findOne({ userId });
  if (!usuario)
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );

  const canje = usuario.simuladoresCanjeados.find(
    (s) => s.simuladorId.toString() === simuladorId
  );

  if (canje && canje.uso_justo > 0) {
    return NextResponse.json(
      { error: "Ya tienes este simulador activo" },
      { status: 400 }
    );
  }

  if (usuario.monedas < simulador.precio)
    return NextResponse.json(
      { error: "No tienes monedas suficientes" },
      { status: 400 }
    );

  usuario.monedas -= simulador.precio;

  if (canje) {
    canje.uso_justo = simulador.uso_justo;
    canje.fecha = new Date();
    canje.monedasPagadas += simulador.precio;
  } else {
    usuario.simuladoresCanjeados.push({
      simuladorId: simulador._id,
      monedasPagadas: simulador.precio,
      uso_justo: simulador.uso_justo,
    });
  }

  await usuario.save();

  return NextResponse.json({ ok: true, nuevoSaldo: usuario.monedas });
}
