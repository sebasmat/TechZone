const express = require("express");
const Stripe = require("stripe");
const payRouter = express.Router()

const stripe = new Stripe(`${process.env.STRIPE_KEY_SECRET}`);

payRouter.post("/", async (req, res) => {
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
    // const createandprice = async (product)=>{
    //   const response = await stripe.products.create({
    //     name: product.name,
    //     description: product.descripcion,
    //     images:product.imagenes
    //   });
    //   const price = await stripe.prices.create({
    //     unit_amount: Math.trunc(product.price * 100),
    //     currency: 'usd',
    //     product: response.id,
    //   });
    // }
    // const {arrayProducts} = req.body;
    // // console.log(arrayProducts);
    // arrayProducts.forEach(async (product) => {
    //   console.log("si entra al foreach");
    //   await createandprice(product);
    // });
    // let arrayItems = []; 
    // arrayProducts.forEach((item) => {
    //   arrayItems.push({
    //     price: 10, // aqui va el price id de stripe del producto
    //     quantity: 1 // aqui va la cantidad a evaluar recibida por body;
    //   })
    // });
    // const {name,precio,descripcion,imagenes} = req.body;
    const { data } = await stripe.products.list({
      limit: 40,
    });
    res.status(200).json({ data: "todo salio bien" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


payRouter.post('/create-checkout-session', async (req, res) => {

  const { estado } = req.body;
  const aux = async (estado) => {
    let arrayProducts = [];
    await Promise.all(
      estado.map(async (obj) => {
        const { data } = await stripe.products.search({
          query: `name:"${obj.name}"`
        });
        const productId = data[0].id;
        const request = await stripe.prices.search({
          query: `product:"${productId}"`
        });
        const priceId = request.data[0].id;
        arrayProducts.push({
          price: priceId,
          quantity: obj.cantidad,
        });
      })
    );
    return arrayProducts;
  };
  let resultfinal;
  aux(estado)
    .then((response) => {
      // console.log(response);
      resultfinal = response;
    })
    .catch((error) => {
      console.error(error);
    });

    const obtenerResultado = async () => {
      try {
        const response = await aux(estado);
        const session = await stripe.checkout.sessions.create({
            line_items: response,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/shopping',
          });
          res.status(200).json(session.url);
      } catch (error) {
        res.status(500).json({error:error.message})
      }
    };
    
    obtenerResultado();
});
  // estado.forEach((object) => {
  //   name = object.name;
  //   arrayNames.push({
  //     name: object.product.name,
  //     quantity: object.quantity,
  //   })
  // });
  // console.log(arrayNames);
  // let productId = "";
  // await arrayNames.forEach(async (obj) => {
  //   const { data } = await stripe.products.search({
  //     query: `name:"${obj.name}"`
  //   })
  //   productId = data[0].id;
  // })
  // console.log(productId);
  // const { data } = await stripe.products.search({
  //   query: `name:"${object.product.name}"`
  // })
  // const productId = data[0].id;
  // console.log(productId);
  // const request = await stripe.prices.search({
  //   query: `product:"${productId}"`
  // })
  // const priceId = request.data[0].id;
  // console.log(priceId);
  // const session = await stripe.checkout.sessions.create({
  //   line_items: arrayProduct,
  //   mode: 'payment',
  //   success_url: 'http://localhost:3000/success',
  //   cancel_url: 'http://localhost:3000/products',
  // });
  // res.status(200).json(session.url);


  // const {name} = req.body;
  // const {data} = await stripe.products.search({
  //   query: `name:"${name}"`
  // })
  // const productId = data[0].id;
  // const request = await stripe.prices.search({
  //   query: `product:"${productId}"`
  // })
  // const priceId = request.data[0].id;
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //       price:priceId, 
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   success_url: 'http://localhost:3000/success',
  //   cancel_url: 'http://localhost:3000/products',
  // });
  // res.status(200).json(session.url);


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