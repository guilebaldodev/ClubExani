import { connectDB } from "@/app/utils/mongoose";
import Pregunta from "@/models/Pregunta";
import Simulador from "@/models/Simulador";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const simulator = await Simulador.findById(id)

    if (!simulator) {
      return NextResponse.json({ error: "Simulador no encontrado" }, { status: 404 });
    }

    await Simulador.findByIdAndDelete(id);

    await Pregunta.updateMany(
      { simuladores: id },
      { $pull: { simuladores: id } }
    );


    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al eliminar simulador:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
