import { EXAMENES } from "@/consts/options";
import mongoose, { Schema, models } from "mongoose";

const SimuladorSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },

    examen: {
      type: String,
      enum: EXAMENES,
      required: true,
    },
    tipo: {
      type: String,
      enum: ["Completo", "Diagnóstico", "Parcial"],
      required: true,
    },
    dificultad: {
      type: String,
      enum: ["Fácil", "Intermedio", "Dificil"],
      required: true,
    },
    contador: {
      type: Number,
      default: 0,
    },
    tiempo: {
      type: Number,
      required: true,
    },
    precio: { type: Number, required: true },
    imagen: { type: String, required: true },
    totalPreguntas: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default models.Simulador || mongoose.model("Simulador", SimuladorSchema);
