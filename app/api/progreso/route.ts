
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/app/utils/mongoose";
import Usuario from "@/models/Usuario";
import Progreso from "@/models/Progreso";
import Simulador from "@/models/Simulador";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    const { simulatorId, solvedQuestions, score, totalScore, time } =
      await req.json();

    if (
      !simulatorId ||
      !Array.isArray(solvedQuestions) ||
      score === undefined ||
      totalScore === undefined ||
      time === undefined
    ) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(simulatorId)) {
      return NextResponse.json(
        { error: "ID de simulador inválido" },
        { status: 400 }
      );
    }

    await connectDB();

    const simulador = await Simulador.findById(simulatorId).select(
      "_id tipo"
    );

    if (!simulador) {
      return NextResponse.json(
        { error: "Simulador no encontrado" },
        { status: 404 }
      );
    }

    const { userId } = await auth();

    // Los visitantes pueden finalizar diagnósticos sin guardar historial.
    if (!userId) {
      if (simulador.tipo !== "Diagnostico") {
        return NextResponse.json(
          { error: "Usuario no autenticado" },
          { status: 401 }
        );
      }

      return NextResponse.json({
        ok: true,
        guest: true,
        progreso: null,
      });
    }

    const usuario = await Usuario.findOne({ clerkId: userId });

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Los usuarios registrados conservan su historial.
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
      {
        ok: true,
        guest: false,
        progreso,
      },
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
