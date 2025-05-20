import { Schema, model, models } from "mongoose";

const ImagenSchema = new Schema({
  nombre: { type: String, required: true },
  url: { type: String, required: true },
  tipo: { type: String, enum: ["pregunta", "respuesta"], required: true },
  preguntaId: { type: Schema.Types.ObjectId, ref: "Pregunta", required: true },
  userId: { type: String }
}, {
  timestamps: true
});

const Imagen = models.Imagen || model("Imagen", ImagenSchema);
export default Imagen;
