import { NextResponse } from "next/server";
import { connectDB } from "@/app/utils/mongoose"; 
import Simulador from "@/models/Simulador";

export async function GET() {
  try {
    await connectDB();
    const simuladores = await Simulador.find().sort({ createdAt: -1 });
    return NextResponse.json({ simuladores });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener simuladores" },
      { status: 500 }
    );
  }
}
