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

        const {name,precio,descripcion,imagenes} = req.body;
        const product = await stripe.products.create({
          name: name,
          description: descripcion,
          images:imagenes
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
  const {name} = req.body;
  const {data} = await stripe.products.search({
    query: `name:"${name}"`
  })
  const productId = data[0].id;
  const request = await stripe.prices.search({
    query: `product:"${productId}"`
  })
  const priceId = request.data[0].id;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price:priceId, 
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/products',
  });
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