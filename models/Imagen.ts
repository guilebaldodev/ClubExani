import { EXAMENES } from "@/consts/options";
import mongoose, { Schema, models } from "mongoose";

const ImagenSchema = new Schema(
  {
    descripcion: { type: String, required: true },
    url: { type: String, required: true },
    tipo: { type: String, enum: ["Pregunta", "Respuesta"], required: true },
    examen: {
      type: String,
      enum: EXAMENES,
      required: true,
    },
    preguntas: [{ type: Schema.Types.ObjectId, ref: "Pregunta" }],
  },
  {
    timestamps: true,
  }
);

export default models.Imagen || mongoose.model("Imagen", ImagenSchema);
