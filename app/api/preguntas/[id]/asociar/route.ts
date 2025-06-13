import { connectDB } from "@/app/utils/mongoose";
import Pregunta from "@/models/Pregunta";
import Simulador from "@/models/Simulador";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req:Request, { params} : any) {
  try {
    await connectDB();


    const { id } = await params;
    const { simulatorId } = await req.json();

    if (
      !mongoose.Types.ObjectId.isValid(id) ||
      !mongoose.Types.ObjectId.isValid(simulatorId)
    ) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }


    const simulator = await Simulador.findById(simulatorId);
    if (!simulator) {
      return NextResponse.json({ error: "Simulador no encontrado" }, { status: 404 });
    }

    const pregunta = await Pregunta.findById(id);
    if (!pregunta) {
      return NextResponse.json({ error: "Pregunta no encontrada" }, { status: 404 });
    }

    if (pregunta.simuladores.includes(simulatorId)) {
      return NextResponse.json({ error: "Ya está asociada al simulador" }, { status: 400 });
    }

    pregunta.simuladores.push(simulatorId);

    await Simulador.findByIdAndUpdate(simulatorId, {
    $inc: { contador: 1 },
    });

    await pregunta.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al asociar pregunta:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
