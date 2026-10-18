
import { EXAMENES } from "@/consts/options";
import mongoose, { Schema, models } from "mongoose";

const GuiaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    descripcion_corta: {
      type: String,
      required: true,
    },
    examen: {
      type: String,
      enum: EXAMENES,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    imagen: {
      type: String,
      required: true,
    },
    archivo: {
      type: String,
      required: true,
    },
    simuladores: [
      {
        type: Schema.Types.ObjectId,
        ref: "Simulador",
      },
    ],
    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default models.Guia || mongoose.model("Guia", GuiaSchema);
