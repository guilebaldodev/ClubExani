
import { connectDB } from "@/app/utils/mongoose";
import Simulador from "@/models/Simulador";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import Usuario from "@/models/Usuario";
import Pregunta from "@/models/Pregunta";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    await connectDB();

    const simulator = await Simulador.findById(id).select(
      "tiempo imagen titulo examen tipo _id"
    );

    if (!simulator) {
      return NextResponse.json(
        { error: "Simulador no encontrado" },
        { status: 404 }
      );
    }

    const { userId } = await auth();

    const esDiagnostico = simulator.tipo === "Diagnostico";

    // Los simuladores de pago requieren autenticación.
    if (!esDiagnostico && !userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Comprobar que existan preguntas.
    const questions = await Pregunta.find({
      simuladores: id,
    }).select("_id contenidoHTML respuestas resumen");

    if (questions.length === 0) {
      return NextResponse.json(
        { error: "Este simulador no tiene preguntas disponibles" },
        { status: 409 }
      );
    }

    // Los diagnósticos no requieren compra ni consumen intentos.
    if (esDiagnostico) {
      return NextResponse.json({
        simulator,
        questions,
        totalQuestions: questions.length,
        user: null,
      });
    }

    // Descontar un intento de manera atómica en simuladores de pago.
    const user = await Usuario.findOneAndUpdate(
      {
        clerkId: userId,
        simuladoresCanjeados: {
          $elemMatch: {
            simuladorId: new mongoose.Types.ObjectId(id),
            uso_justo: { $gt: 0 },
          },
        },
      },
      {
        $inc: {
          "simuladoresCanjeados.$.uso_justo": -1,
        },
      },
      {
        new: true,
      }
    ).select("_id simuladoresCanjeados");

    if (!user) {
      return NextResponse.json(
        { error: "No tienes intentos disponibles" },
        { status: 403 }
      );
    }

    return NextResponse.json({
      simulator,
      questions,
      totalQuestions: questions.length,
      user,
    });
  } catch (error) {
    console.error("Error al iniciar simulador:", error);

    return NextResponse.json(
      { error: "Error del servidor" },
      { status: 500 }
    );
  }
}
