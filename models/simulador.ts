import mongoose, { Schema, models } from "mongoose";

const SimuladorSchema = new Schema(
  {
    titulo: { type: String, required: true }, 
    examen: { type: String, required: true }, 
    tipo: { type: String, required: true }, 
    dificultad: {
      type: String,
      enum: ["Fácil", "Intermedio", "Avanzado"],
      required: true,
    },
    precio: { type: Number, required: true }, 
    imagen: { type: String, required: true }, 
    totalPreguntas: { type: Number, default: 0 }

  },
  {
    timestamps: true,
  }
);

export default models.Simulador || mongoose.model("Simulador", SimuladorSchema);
