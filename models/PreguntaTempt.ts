import { Schema, model, models } from "mongoose";

const PreguntaSchema = new Schema({
  contenidoHTML: { type: String, required: true },
  respuestas: [
    {
      texto: String,
      imagen: String,
      esCorrecta: Boolean,
      explicacion: String
    }
  ],
  simuladores: [{ type: Schema.Types.ObjectId, ref: "Simulador" }]
}, {
  timestamps: true
});

const Pregunta = models.Pregunta || model("Pregunta", PreguntaSchema);
export default Pregunta;
