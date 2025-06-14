import { connectDB } from "@/app/utils/mongoose";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Imagen from "@/models/Imagen";
import Pregunta from "@/models/Pregunta";

export async function POST(req: Request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const { preguntaId } = await req.json();

    if (
      !mongoose.Types.ObjectId.isValid(id) ||
      !mongoose.Types.ObjectId.isValid(preguntaId)
    ) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const imagen = await Imagen.findById(id);
    if (!imagen) {
      return NextResponse.json(
        { error: "Imagen no encontrada" },
        { status: 404 }
      );
    }

    const pregunta = await Pregunta.findById(preguntaId);
    if (!pregunta) {
      return NextResponse.json(
        { error: "Pregunta no encontrada" },
        { status: 404 }
      );
    }

    if (imagen.preguntas.includes(preguntaId)) {
      return NextResponse.json({ error: "Ya está asociada" }, { status: 400 });
    }

    imagen.preguntas.push(preguntaId);
    await imagen.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al asociar pregunta:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const { preguntaId } = await req.json();


    if (
      !mongoose.Types.ObjectId.isValid(id) ||
      !mongoose.Types.ObjectId.isValid(preguntaId)
    ) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const imagen = await Imagen.findById(id);
    if (!imagen) {
      return NextResponse.json(
        { error: "Imagen no encontrada" },
        { status: 404 }
      );
    }

    const pregunta = await Pregunta.findById(preguntaId);
    if (!pregunta) {
      return NextResponse.json(
        { error: "Pregunta no encontrada" },
        { status: 404 }
      );
    }

    if (!imagen.preguntas.includes(preguntaId)) {
      return NextResponse.json(
        { error: "la pregunta no esta asociada" },
        { status: 400 }
      );
    }

    imagen.preguntas = imagen.preguntas.filter(
      (pid) => pid.toString() !== preguntaId
    );

    await imagen.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al eliminar pregunta:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
