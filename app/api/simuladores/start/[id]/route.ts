import { connectDB } from "@/app/utils/mongoose";
import Simulador from "@/models/Simulador";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import Usuario from "@/models/Usuario";
import Pregunta from "@/models/Pregunta";


export async function GET(req: Request, { params }) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const simulator = await Simulador.findById(id).select(
      "tiempo imagen titulo examen _id"
    );

    if (!simulator) {
      return NextResponse.json({ error: "Not found" }, { status: 401 });
    }

    console.log(simulator.uso_justo, "---------");

    const user = await Usuario.findOne({ clerkId: userId })
    .select("_id simuladoresCanjeados");

    let flag = false;

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 401 });
    }

    user.simuladoresCanjeados.map((simulador) => {
      if (simulador.simuladorId == id) {
        if (simulador.uso_justo <= 0) {
          console.log("Entre aqui");
          return NextResponse.json(
            { error: "No more attempts" },
            { status: 403 }
          );
        }

        flag = true;
        simulador.uso_justo = simulador.uso_justo - 1;
        console.log(id, simulador.simuladorId);
        console.log("Se ejecuto", simulador.uso_justo);
      }
    });

    if (!flag) {
      return NextResponse.json({ error: "Unathorized" }, { status: 401 });
    }

    const questions = await Pregunta.find({ simuladores: id }).select(
      "_id contenidoHTML respuestas"
    );

    await user.save();

    return NextResponse.json({
      simulator,
      questions,
      totalQuestions: questions.length,
      user
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ error: "Error del servidor" });
  }
}
