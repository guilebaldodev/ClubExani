import { z } from "zod";
import { EXAMENES } from "@/consts/options";

const EXAMENES_TUPLE = [...EXAMENES] as [string, ...string[]];

export const paqueteSchema = z.object({
  titulo: z.string().min(1, "El título es obligatorio"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
  descripcion_corta: z.string().min(1, "La descripción corta es obligatoria"),

  examen: z.enum(EXAMENES_TUPLE),

  precio: z.number().min(0, "El precio debe ser mayor o igual a 0"),
  imagen: z.string().min(1, "La imagen es obligatoria"),

  simuladores: z.array(z.string()).default([]),

  totalPreguntas: z.number().min(0, "Total de preguntas inválido"),

  activo: z.boolean().default(true),
});