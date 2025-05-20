import { Schema, model, models } from 'mongoose';

const VentaSchema = new Schema({
  userId: { type: String, required: true },
  monedasCompradas: { type: Number, required: true },
  montoPagado: { type: Number, required: true },
  status: {
    type: String,
    enum: ['completada', 'pendiente', 'fallida'],
    default: 'completada'
  },
  stripeSessionId: { type: String },
  fecha: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Venta = models.Venta || model('Venta', VentaSchema);
export default Venta;
