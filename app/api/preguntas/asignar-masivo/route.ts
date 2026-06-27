import { connectDB } from "@/app/utils/mongoose";
import Pregunta from "@/models/Pregunta";
import Simulador from "@/models/Simulador";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { simulatorId, questionIds } = await req.json();

    if (!mongoose.Types.ObjectId.isValid(simulatorId)) {
      return NextResponse.json(
        { error: "ID de simulador inválido" },
        { status: 400 }
      );
    }

    if (!Array.isArray(questionIds) || questionIds.length === 0) {
      return NextResponse.json(
        { error: "No se enviaron preguntas" },
        { status: 400 }
      );
    }

    const invalidQuestion = questionIds.some(
      (id) => !mongoose.Types.ObjectId.isValid(id)
    );

    if (invalidQuestion) {
      return NextResponse.json(
        { error: "Hay preguntas con ID inválido" },
        { status: 400 }
      );
    }

    const simulator = await Simulador.findById(simulatorId);

    if (!simulator) {
      return NextResponse.json(
        { error: "Simulador no encontrado" },
        { status: 404 }
      );
    }

    const preguntasNuevas = await Pregunta.find({
      _id: { $in: questionIds },
      simuladores: { $ne: simulatorId },
    }).select("_id");

    const idsNuevos = preguntasNuevas.map((p) => p._id);

    if (idsNuevos.length === 0) {
      return NextResponse.json({
        ok: true,
        asignadas: 0,
        mensaje: "Todas las preguntas ya estaban asignadas",
      });
    }

    await Pregunta.updateMany(
      {
        _id: { $in: idsNuevos },
      },
      {
        $addToSet: {
          simuladores: simulatorId,
        },
      }
    );

    await Simulador.findByIdAndUpdate(simulatorId, {
      $inc: {
        contador: idsNuevos.length,
        totalPreguntas: idsNuevos.length,
      },
    });

    return NextResponse.json({
      ok: true,
      asignadas: idsNuevos.length,
      mensaje: `${idsNuevos.length} preguntas asignadas correctamente`,
    });
  } catch (error) {
    console.error("Error al asignar preguntas masivamente:", error);

    return NextResponse.json(
      { error: "Error del servidor" },
      { status: 500 }
    );
  }
}