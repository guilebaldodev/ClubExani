import { connectDB } from "@/app/utils/mongoose";
import { paqueteSchema } from "@/schemas/paqueteSchema";
import { NextResponse } from "next/server";
import Paquete from "@/models/Paquete";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const parsed = paqueteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Datos invalidos" }, { status: 400 });
    }

    const newPaquete = new Paquete(parsed.data);
    const saved = await newPaquete.save();

    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const query: any = {};

    // búsqueda
    if (searchParams.get("titulo")) {
      query.titulo = { $regex: searchParams.get("titulo"), $options: "i" };
    }

    // filtro
    if (searchParams.get("examen")) {
      query.examen = searchParams.get("examen");
    }

    if (searchParams.get("activo")) {
      query.activo = searchParams.get("activo") === "true";
    }

    // paginación
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const total = await Paquete.countDocuments(query);
    const paquetes = await Paquete.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      paquetes,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener paquetes" },
      { status: 500 }
    );
  }
}