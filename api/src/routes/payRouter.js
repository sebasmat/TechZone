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


        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = payRouter;