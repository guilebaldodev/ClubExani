export type Venta = {
    _id:string;
    userId:string;
    email:string;
    amountPaid:string;
    paymentStatus:string;
    paymentMethod:string;
    stripeSessionId:string;
    stripeCreatedAt:string;
}