import { auth, currentUser } from "@clerk/nextjs/server";
import {connectDB } from "@/app/utils/mongoose"
  await import("@/models/Simulador");

export async function POST() {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  await connectDB();


  const { default: Usuario } = await import("@/models/Usuario"); 

  const userClerk = await currentUser()

  let user = await Usuario.findOne({ clerkId:userId }).populate(
    {
      path:"simuladoresCanjeados.simuladorId"}
  )


  if (!user) {
    user = await Usuario.create({
      clerkId:userId,
      rol: "estudiante",
      email: userClerk?.emailAddresses[0]?.emailAddress || "" ,
      simuladoresCanjeados: [],
      nombre: userClerk?.firstName || "",
      estado:"",
      edad:0
    });
  }

  return Response.json(user);
}

