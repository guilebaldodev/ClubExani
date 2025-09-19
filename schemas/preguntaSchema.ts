import { z } from "zod";
import { EXAMENES, OrigenOptions } from "@/consts/options";

export const preguntaSchema = z.object({
  contenidoHTML: z.string().min(1, "La pregunta es obligatoria"),
  resumen: z.string().min(1, "El resumen es obligatorio"),
  origen: z.enum(
      OrigenOptions.map((op) => op.value) as [string, ...string[]],
      { required_error: "El tipo es requerido" }
    ),
  examen: z.enum(EXAMENES),
  area: z.string().min(1, "El área es obligatoria"),
  respuestaCorrecta: z.enum(["0", "1", "2", "3"], {
  required_error: "Selecciona la respuesta correcta",
}),
  respuestas: z.tuple([
    z.object({
      html: z.string().min(1, "La respuesta 1 es obligatoria"),
      explicacion: z.string().min(1, "La explicación 1 es obligatoria"),
      esCorrecta: z.boolean(),
    }),
    z.object({
      html: z.string().min(1, "La respuesta 2 es obligatoria"),
      explicacion: z.string().min(1, "La explicación 2 es obligatoria"),
      esCorrecta: z.boolean(),
    }),
    z.object({
      html: z.string().min(1, "La respuesta 3 es obligatoria"),
      explicacion: z.string().min(1, "La explicación 3 es obligatoria"),
      esCorrecta: z.boolean(),
    }),
 z.object({
    html: z.string(),
    explicacion: z.string(),
    esCorrecta: z.boolean(),
  }).optional(), 
  ]),
});
