
import { Schema, model, models } from "mongoose";

const UsuarioSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
    },

    nombre: {
      type: String,
    },

    estado: {
      type: String,
    },

    edad: {
      type: Number,
    },

    rol: {
      type: String,
      enum: ["estudiante", "admin"],
      default: "estudiante",
    },

    simuladoresCanjeados: [
      {
        simuladorId: {
          type: Schema.Types.ObjectId,
          ref: "Simulador",
        },

        fecha: {
          type: Date,
          default: Date.now,
        },

        uso_justo: Number,
      },
    ],

    guiasAdquiridas: [
      {
        guiaId: {
          type: Schema.Types.ObjectId,
          ref: "Guia",
          required: true,
        },

        fecha: {
          type: Date,
          default: Date.now,
        },

        fechaExpiracion: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.Usuario || model("Usuario", UsuarioSchema);
