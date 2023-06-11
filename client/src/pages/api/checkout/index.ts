import Stripe from "stripe";

const stripe = new Stripe("sk_test_51NGLywL5P8zIQxPGWvC98xOR1eBDLnEl1niBT1ySMfqBfmb7ugvfp5nvOz0ESF65KwLDmwt2kHdE59lIRfyaH2yK00YhNOp9LW",{
        apiVersion:"2022-11-15"
    })

export default async function handler (req,res){
    if(req.method === "POST"){
        try{
            const session = await stripe.checkout.sessions.create({
                line_items: req.body.line_items,
                mode:"payment",
                payment_method_types:['card'],
                success_url: "http://localhost:3000/products",
                cancel_url: "http://localhost:3000"
            })
            return res.status(200).json(session)
        }catch(error){
            return res.status(400).json(error)
        }
    }
}






















// import { NextApiRequest,NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.SECRET_KEY as string,{
//     apiVersion:"2022-11-15"
// })


// export default async (req:NextApiRequest,res:NextApiResponse)=>{
//     const {quantity} = req.body
//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items:[{
//             price: process.env.PRICE_ID,
//             quantity,
//         }],
//         mode: 'payment',
//         success_url:`http://localhost:3000/result?session_id{CHECKOUT_SESSION_ID}`,
//         cancel_url: `http://localhost:3000/cancel`
//     })
//     res.status(200).json({sessionId: session.id})
// }





// export default async function handler (req:NextApiRequest,res:NextApiResponse){
// if(req.method==='POST'){

// }else{
//     res.redirect('303',"https://localhost3000")
// }
// }