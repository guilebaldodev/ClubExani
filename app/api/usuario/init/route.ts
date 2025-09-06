import { auth, currentUser } from "@clerk/nextjs/server";
import {connectDB } from "@/app/utils/mongoose"

export async function POST() {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  await connectDB();


  const { default: Usuario } = await import("@/models/Usuario"); 

  const user = await currentUser()

  const existente = await Usuario.findOne({ clerkId:userId });

  if (!existente) {
    await Usuario.create({
      clerkId:userId,
      rol: "estudiante",
      email: user?.emailAddresses[0]?.emailAddress || "" ,
      simuladoresCanjeados: [],
      nombre: user?.firstName || "",
      estado:"",
      edad:0
    });
  }

  return Response.json({ ok: true });
}

