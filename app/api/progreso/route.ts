import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/app/utils/mongoose";
import Usuario from "@/models/Usuario";
import Progreso from "@/models/Progreso";
import Simulador from "@/models/Simulador";

export async function POST(req: Request) {
  try {
    await connectDB();


    const { userId } = await auth();

    if (!userId)
      return NextResponse.json(
        { error: "Usuario no autenticado" },
        { status: 401 }
      );

    const usuario = await Usuario.findOne({ clerkId: userId });
    if (!usuario)
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );

    const { simulatorId, solvedQuestions, score, totalScore, time } =
      await req.json();

if (
  !simulatorId ||
  !solvedQuestions ||
  score === undefined ||
  totalScore === undefined ||
  time === undefined
) {
  console.log(simulatorId, solvedQuestions, score, totalScore, time);
  return NextResponse.json(
    { error: "Datos incompletos" },
    { status: 400 }
  );
}

    const simulador = await Simulador.findById(simulatorId);
    if (!simulador)
      return NextResponse.json(
        { error: "Simulador no encontrado" },
        { status: 404 }
      );

    const progreso = await Progreso.create({
      userId: usuario._id,
      clerkId: userId,
      simulatorId,
      solvedQuestions,
      score,
      totalScore,
      time,
    });

    return NextResponse.json(
      { ok: true, progreso },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al guardar progreso:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
