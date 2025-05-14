import { Schema, model, models } from "mongoose";

const ProgresoSchema = new Schema({
  userId: { type: String, required: true },
  simuladorId: { type: Schema.Types.ObjectId, ref: "Simulador", required: true },

  preguntasResueltas: [
    {
      preguntaId: { type: Schema.Types.ObjectId, ref: "Pregunta" },
      respuestaSeleccionada: Number,
      fueCorrecta: Boolean
    }
  ],

  puntuacion: { type: Number, required: true },
  fechaFin: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Progreso = models.Progreso || model("Progreso", ProgresoSchema);
export default Progreso;
