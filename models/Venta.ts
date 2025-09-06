import { Schema, model, models } from "mongoose";

const VentaSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Usuario", required: true},
    clerkId: { type: String, required: true},
    email: { type: String},
    amountPaid: { type: Number, required: true },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentMethod:{ type: String},
    stripeSessionId: { type: String},
    stripeCreatedAt:{type:Date}
  },
  {
    timestamps: true,
  }
);

const Venta = models.Venta || model("Venta", VentaSchema);
export default Venta;
