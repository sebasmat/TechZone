import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_KEY_SECRET);

export default async function checkout_sessions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      res.status(200).json(paymentIntent);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
