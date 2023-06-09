const express = require("express");
const Stripe = require("stripe");
const payRouter = express.Router()

const stripe = new Stripe(`${process.env.STRIPE_KEY_SECRET}`);

payRouter.post("/", async (req,res)=>{
    try {
        // const {amount} = req.body;
        // console.log(amount);
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: amount,
        //     currency: 'usd',
        //     automatic_payment_methods: {
        //         enabled: true,
        //     },
        // });

        const {name,precio} = req.body;
        const product = await stripe.products.create({
          name: name,
        });
        const price = await stripe.prices.create({
            unit_amount: precio * 100,
            currency: 'usd',
            product: product.id,
          });
        console.log("esto es el producto: ",product);
        console.log("esto es el precio: ",price);


        res.status(200).json(price);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
})


payRouter.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price:'price_1NGvzWKIHVTQltADVIUmA5QB', // este es el id del producto Prueba2
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/products',
  });
  console.log(session.url);
  res.status(200).json(session.url);
});

// payRouter.post('/create-checkout-session', async (req, res) => {
//   console.log("si llega a la ruta ");
//   const {name,precio} = req.body;
//   const result = precio * 100;
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name:name,
//           },
//           unit_amount: 80,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/products',
//   });
//   res.redirect(303, session.url);
// });

module.exports = payRouter;