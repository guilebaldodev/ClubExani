import { connectDB } from "@/app/utils/mongoose";
import Paquete from "@/models/Paquete";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }) 
{
  try {

    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const paquete = await Paquete.findById(id).populate("simuladores");

    if (!paquete) {
      return NextResponse.json({ error: "Paquete no encontrado" }, { status: 404 });
    }

    return NextResponse.json(paquete);

  } catch (error) {
    console.error("Error al obtener paquete:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }) 
{
  try {

    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const paquete = await Paquete.findById(id);

    if (!paquete) {
      return NextResponse.json({ error: "Paquete no encontrado" }, { status: 404 });
    }

    await Paquete.findByIdAndDelete(id);

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Error al eliminar paquete:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}