import { EXAMENES } from "@/consts/options";
import mongoose, { Schema, models } from "mongoose";

const PaqueteSchema = new Schema(
  {
    titulo: { type: String, required: true },

    descripcion: { type: String, required: true },
    descripcion_corta: { type: String, required: true },

    examen: {
      type: String,
      enum: EXAMENES,
      required: true,
    },

    precio: { type: Number, required: true },
    imagen: { type: String, required: true },

    simuladores: [
      { type: Schema.Types.ObjectId, ref: "Simulador" },
    ],

    totalPreguntas: {
      type: Number,
      default: 0,
    },

    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Paquete || mongoose.model("Paquete", PaqueteSchema);