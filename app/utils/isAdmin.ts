import Usuario from "@/models/UsuarioTempt";
import { connectDB } from "./mongoose";

export async function esAdmin(userId: string) {
  await connectDB();

  const usuario = await Usuario.findOne({ userId });
  return usuario?.rol === "admin";
}
