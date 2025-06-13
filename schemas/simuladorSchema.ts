import { dificultadOptions, EXAMENES, tipoOptions } from "@/consts/options";
import { z } from "zod";

export const simuladorSchema = z.object({
  titulo: z.string({
    required_error: "El título es requerido",
  }).min(1, "El título no puede estar vacío"),

  descripcion: z.string({
    required_error: "El título es requerido",
  }).min(1, "El título no puede estar vacío"),



  examen: z.enum(EXAMENES),
  tipo: z.enum(
    tipoOptions.map((op) => op.value) as [string, ...string[]],
    { required_error: "El tipo es requerido" }
  ),

  dificultad: z.enum(
    dificultadOptions.map((op) => op.value) as [string, ...string[]],
    { required_error: "La dificultad es requerida" }
  ),

  tiempo: z.number({
    required_error: "El tiempo es requerido",
  }).min(1, { message: "El tiempo debe ser mayor a 0" }),

  precio: z.number({
    required_error: "El precio es requerido",
  }).nonnegative({ message: "El precio no puede ser negativo" }),

  imagen: z.string({
    required_error: "La imagen es requerida",
  }).url({ message: "Debe ser una URL válida" }),
});
