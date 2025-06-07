import { connectDB } from "@/app/utils/mongoose";
import Venta from "@/models/Venta";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const query: any = {};

    if (searchParams.get("email")) {
      query.email = { $regex: searchParams.get("email"), $options: "i" };
    }

    if (searchParams.get("plan")) {
      query.amountPaid = searchParams.get("plan");
    }

    
    if (searchParams.get("status")) {
      query.status = searchParams.get("status");
    }

    

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const total = await Venta.countDocuments(query);
    const ventas = await Venta.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      ventas,
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