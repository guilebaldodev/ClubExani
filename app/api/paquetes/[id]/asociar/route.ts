import { connectDB } from "@/app/utils/mongoose";
import Paquete from "@/models/Paquete";
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

    const paquete = await Paquete.findById(id);
    if (!paquete) {
      return NextResponse.json({ error: "Paquete no encontrado" }, { status: 404 });
    }

    if (paquete.simuladores.includes(simulatorId)) {
      return NextResponse.json({ error: "Ya está asociada al simulador" }, { status: 400 });
    }

    paquete.simuladores.push(simulatorId);

    // await Simulador.findByIdAndUpdate(simulatorId, {
    // $inc: { contador: 1 },
    // });

    await paquete.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al asociar examen:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
