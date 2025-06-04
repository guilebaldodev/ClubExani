import { EXAMENES } from "@/consts/options";
import { Schema, model, models } from "mongoose";

const PreguntaSchema = new Schema({
  contenidoHTML: { type: String, required: true },
  origen: { type: String, required: true,enum:["Examen","IA"] },
  examen: {
  type: String,
  enum: EXAMENES,
  required: true,
},
 area: {
  type: String,
  required: true,
},
  respuestas: [
    {
      html: { type: String, required: true },
      esCorrecta: { type: Boolean, required: true },
      explicacion: { type: String, required: true }
    }
  ],
  simuladores: [{ type: Schema.Types.ObjectId, ref: "Simulador" }],
}, {
  timestamps: true
});

const Pregunta = models.Pregunta || model("Pregunta", PreguntaSchema);
export default Pregunta;
