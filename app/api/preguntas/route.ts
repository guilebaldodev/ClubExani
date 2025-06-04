import { NextResponse } from "next/server";
import { connectDB } from "@/app/utils/mongoose";
import Pregunta from "@/models/Pregunta";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const titulo = searchParams.get("titulo")?.toLowerCase();
    const asignado = searchParams.get("asignado");
    const origen = searchParams.get("origen");
    const examen = searchParams.get("examen");
    const simulador = searchParams.get("simulador");

    const filtros: any = {};

    if (titulo) {
      filtros.contenidoHTML = { $regex: titulo, $options: "i" };
    }

    if (origen) {
      filtros.origen = origen;
    }

    if (examen) {
      filtros.examen = examen;
    }

    if (asignado === "Asignada") {
      filtros.simuladores = { $exists: true, $ne: [] };
    }

    if (asignado === "Pendiente") {
      filtros.simuladores = { $size: 0 };
    }

    if (simulador) {
      filtros.simuladores = simulador;
    }

    console.log(filtros,"filtros")


    const total = await Pregunta.countDocuments(filtros);
    const preguntas = await Pregunta.find(filtros)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const pages = Math.ceil(total / limit);

    return NextResponse.json({ preguntas, total, pages });
  } catch (error) {
    console.error("Error en la API de preguntas:", error);
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
}


export async function POST(req:Request){
  try {

    const body= await req.json()


    const indexCorrecto=parseInt(body.respuestaCorrecta)
    body.respuestas= body.respuestas.map((resp:any,index:number)=>({
      ...resp,
      esCorrecta:index===indexCorrecto
    }))


    console.log(body.respuestas,"respuestaas")

    const newQuestion = new Pregunta(body)


    const saved = await newQuestion.save()

    return NextResponse.json(saved,{status:200})


  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
      error:"Error interno del servidor"},
      {status:500}
    )
  }
}