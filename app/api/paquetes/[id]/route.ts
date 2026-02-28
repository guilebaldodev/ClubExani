import { connectDB } from "@/app/utils/mongoose";
import { NextResponse } from "next/server";
import Paquete from "@/models/Paquete";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const paquete = await Paquete.findById(id).populate("simuladores");

    if (!paquete) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    }

    return NextResponse.json(paquete);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener paquete" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const deleted = await Paquete.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al eliminar paquete" },
      { status: 500 }
    );
  }
}