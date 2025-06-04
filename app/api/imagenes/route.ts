import { connectDB } from "@/app/utils/mongoose";
import Imagen from "@/models/Imagen";
import { imageSchema } from "@/schemas/imagenSchema";
import { NextResponse } from "next/server";


export async function POST(req:Request){
  try {
    await connectDB()
    const body = await req.json()
    const parsed= imageSchema.safeParse(body)
     if(!parsed.success){
            return NextResponse.json(
                {error:"Datos invalidos"},
                {status:400}
            )
        }


      const newImage = await new Imagen(parsed.data)

      const saved = await newImage.save()


      return NextResponse.json(saved,{status:201})



  } catch (error) {
    console.log(error,"EROOOR")
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

    if (searchParams.get("descripcion")) {
      query.descripcion = { $regex: searchParams.get("descripcion"), $options: "i" };
    }

    if (searchParams.get("examen")) {
      query.examen = searchParams.get("examen");
    }

    if (searchParams.get("tipo")) {
      query.tipo = searchParams.get("tipo");
    }

    if (searchParams.get("asignada") === "Asignada") {
      query.preguntas = { $exists: true, $ne: [] };
    }

    if (searchParams.get("asignada") === "Pendiente") {
      query.preguntas = { $size: 0 };
    }

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const total = await Imagen.countDocuments(query);
    const imagenes = await Imagen.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      imagenes,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener las imagenes" },
      { status: 500 }
    );
  }
}