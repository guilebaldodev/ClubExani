import { connectDB } from "@/app/utils/mongoose";
import { NextResponse } from "next/server";
import Imagen from "@/models/Imagen";
import mongoose from "mongoose";
import cloudinary from "@/app/utils/cloudinary";



export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const imagen = await Imagen.findById(id);

    if (!imagen) {
      return NextResponse.json({ error: "Imagen no encontrada" }, { status: 404 });
    }

    if (imagen.public_id) {


      await cloudinary.uploader.destroy(imagen.public_id);
    }

    await Imagen.findByIdAndDelete(id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al eliminar imagen:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
