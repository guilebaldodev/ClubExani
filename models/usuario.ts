import { Schema, model, models } from "mongoose";

const UsuarioSchema = new Schema(
  {
    userId: {
      type: "String",
      require,
      unique: true,
    },
    rol: { type: String, enum: ["estudiante", "admin"], default: "estudiante" },
    monedas: {
      type: Number,
      default: 0,
    },
    simuladoresCanjeados: [
      {
        simuladorId: { type: Schema.Types.ObjectId, ref: "Simulador" },
        fecha: { type: Date, default: Date.now },
        monedasPagadas: Number,
        expiracion: { type: Date, required: true }, 
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.Usuario || model("Usuario", UsuarioSchema);
