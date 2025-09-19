import { Schema, model, models } from "mongoose";

const ProgresoSchema = new Schema({

  userId: { type: Schema.Types.ObjectId, ref: "Usuario", required: true},
  clerkId: { type: String, required: true},
  simulatorId: { type: Schema.Types.ObjectId, ref: "Simulador", required: true },

  solvedQuestions: [
    {
      questionId: { type: Schema.Types.ObjectId, ref: "Pregunta" },
      selectedAnswer: Number,
      wasCorrect: Boolean
    }
  ],

  score: { type: Number, required: true },
  totalScore: { type: Number, required: true },
  time: { type: Number, required: true },
}, {
  timestamps: true
});

const Progreso = models.Progreso || model("Progreso", ProgresoSchema);
export default Progreso;
