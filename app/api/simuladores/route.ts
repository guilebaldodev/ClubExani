import { connectDB } from "@/app/utils/mongoose";
import { simuladorSchema } from "@/schemas/simuladorSchema";
import { NextResponse } from "next/server";
import Simulador from "@/models/Simulador"


export async function POST(req:Request){ 
    try {
        await connectDB()
        const body= await req.json()
        const parsed= simuladorSchema.safeParse(body)
        if(!parsed.success){
            return NextResponse.json(
                {error:"Datos invalidos"},
                {status:400}
            )
        }
        const newSimulator = new Simulador(parsed.data)
        const saved = await newSimulator.save()        
        return NextResponse.json(saved,{status:201})
    } catch (error) {
        
        console.error(error)
        return NextResponse.json(
            {error:"Error interno del servidor"},
            {status:500}
        )

    }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const query: any = {};

    if (searchParams.get("titulo")) {
      query.titulo = { $regex: searchParams.get("titulo"), $options: "i" };
    }

    if (searchParams.get("examen")) {
      query.examen = searchParams.get("examen");
    }

    if (searchParams.get("tipo")) {
      query.tipo = searchParams.get("tipo");
    }

    if (searchParams.get("dificultad")) {
      query.dificultad = searchParams.get("dificultad");
    }

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const total = await Simulador.countDocuments(query);
    const simuladores = await Simulador.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      simuladores,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener simuladores" },
      { status: 500 }
    );
  }
}