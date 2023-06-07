const express = require("express");
const Stripe = require("stripe");
const payRouter = express.Router()

const stripe = new Stripe(`${process.env.STRIPE_KEY_SECRET}`);

payRouter.post("/", async (req,res)=>{
    try {
        const {amount} = req.body;
        console.log(amount);
        const paymentIntent = await stripe.paymentIntents.create({
            amount:amount,
            currency:"usd",
            payment_method_types:["card"],
            description:"descripcion del producto",
            confirm:true
        })
        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = payRouter;