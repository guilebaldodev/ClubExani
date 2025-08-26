import { Schema, model, models } from "mongoose";

const UsuarioSchema = new Schema(
  {
    userId: {
      type: String,
      required:true,
      unique: true,
    },
    nombre: {
      type: String,
    },
    estado: {
      type: String,
    },

    edad:{
      type:Number
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
        uso_justo: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.Usuario || model("Usuario", UsuarioSchema);
