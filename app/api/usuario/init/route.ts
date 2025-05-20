import { auth } from "@clerk/nextjs/server";
import {connectDB} from "@/app/utils/mongoose"

export async function POST() {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  await connectDB();


  const { default: Usuario } = await import("@/models/UsuarioTempt"); 

  const existente = await Usuario.findOne({ userId });
  
  if (!existente) {
    await Usuario.create({
      userId,
      rol: "estudiante",
      simuladoresCanjeados: [],
      historial: [
      ]
    });
  }

  return Response.json({ ok: true });
}

