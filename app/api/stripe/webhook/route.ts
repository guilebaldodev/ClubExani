import Stripe from "stripe";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/Usuario";
import Venta from "@/models/Venta";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
  const rawBody = await req.arrayBuffer();
  const bodyBuffer = Buffer.from(rawBody);
  const signature = (await headers()).get("stripe-signature");


  let event;

  try {
    event = stripe.webhooks.constructEvent(
      bodyBuffer,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Invalid signature:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const clerkId = session.metadata?.userId;


    try {
      await connectDB();

      const user = await User.findOne({ clerkId });

      if (!user) {
        console.error("User not found:", clerkId);
        return new Response("User not found", { status: 404 });
      }

      const amount = session.amount_total;


      if (amount === 1000) user.monedas += 10;
      if (amount === 4900) user.monedas += 50;
      else if (amount === 8900) user.monedas += 100;
      else if (amount === 19900) user.monedas += 250;
      else if (amount === 34900) user.monedas += 500;

      await user.save();


      await Venta.create({
        userId:user._id,
        clerkId,
  	    email: session.customer_email || session.customer_details?.email || null,
        amountPaid:session.amount_total,
        paymentStatus:session.payment_status||"unpaid",
        paymentMethod:session.payment_method_types?.[0] || null,
        stripeSessionId:session.id,
        stripeCreatedAt:new Date(session.created * 1000)
      })

      return new Response("Success", { status: 200 });
    } catch (err) {
      console.error("Webhook error:", err);
      return new Response("Internal error", { status: 500 });
    }
  }

  return new Response("Unhandled event", { status: 200 });
}
