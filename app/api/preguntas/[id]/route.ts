import { connectDB } from "@/app/utils/mongoose";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Pregunta from "@/models/Pregunta";
import Simulador from "@/models/Simulador";



export async function DELETE(
  req: Request,
  context: any
) {
  try {
    await connectDB();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const pregunta = await Pregunta.findById(id);
    if (!pregunta) {
      return NextResponse.json({ error: "Pregunta no encontrada" }, { status: 404 });
    }

    for (const simuladorId of pregunta.simuladores) {
      await Simulador.findByIdAndUpdate(simuladorId, {
        $inc: { contador: -1 },
      });
    }

    await Pregunta.findByIdAndDelete(id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al eliminar pregunta:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

