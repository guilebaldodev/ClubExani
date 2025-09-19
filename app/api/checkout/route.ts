import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  const { priceId, user:userId } = await req.json();


  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
       metadata: {
        userId,
      },
      success_url: "http://localhost:3000/plataforma/mis-simuladores", 
      cancel_url: "http://localhost:3000/plataforma/monedas",
    });

    console.log()
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Error al crear sesión de checkout:", err);
    return NextResponse.json({ error: "Error creando sesión de pago" }, { status: 500 });
  }
}
