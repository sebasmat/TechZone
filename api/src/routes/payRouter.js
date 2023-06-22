const express = require("express");
const Stripe = require("stripe");
const payRouter = express.Router();
const bodyParser = require("body-parser");
const findProductByName = require("../Controllers/Products/findProductByName");

const stripe = new Stripe(`${process.env.STRIPE_KEY_SECRET}`);

// payRouter.put("/", async (req, res) => {
//   try {
//     const {productId, stock } = req.body;
//     const update = await actualizarStock(productId, stock);
//   }
// catch(error){
//   res.status(404).send({error: error.message})
// }
// });

// module.exports = putItem;

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
    const { product } = req.body;
    console.log("este es el producto que recibe la ruta ", product);

    const createandprice = async (product) => {
      const response = await stripe.products.create({
        name: product.name,
        description: product.description,
      });
      console.log("esta es la creación del producto", response);
      const price = await stripe.prices.create({
        unit_amount: Math.trunc(product.price * 100),
        currency: "usd",
        product: response.id,
      });
      console.log("esta es la creación del precio", price);
    };

    createandprice(product);
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
});

payRouter.post("/create-checkout-session", async (req, res) => {
  const { estado } = req.body;
  console.log(estado[0].email);
  const aux = async (estado) => {
    let arrayProducts = [];
    await Promise.all(
      estado.map(async (obj) => {
        const { data } = await stripe.products.search({
          query: `name:"${obj.name}"`,
        });
        const productId = data[0].id;
        const request = await stripe.prices.search({
          query: `product:"${productId}"`,
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
        mode: "payment",
        success_url:
          "http://techzone-market-macanita.vercel.app/success?id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://techzone-market-macanita.vercel.app/shopping",
      });
      res.status(200).json({
        sessionURL: session.url,
        sessionId: session.id,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  obtenerResultado();
});
const endpointSecret =
  "whsec_03acd3020ba42513efdb25f3b2d9dcf22587e5ba1167fda5570c520c40f889db";

const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  console.log("Fulfilling order", lineItems);
};

payRouter.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (request, response) => {
    const payload = request.body;
    console.log(typeof payload);
    console.log(payload);

    const sig = request.headers["stripe-signature"];
    console.log("Si entra al /webhook");

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      console.log("este es el evento: ", event);
    } catch (err) {
      console.log("error:", err.message);
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
      console.log("Si se completo el pago");
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      // Fulfill the purchase...
      fulfillOrder(lineItems);
    }
    response.status(200).end();
  }
);

payRouter.get("/checkout-session", async (req, res) => {
  try {
    const { id } = req.query;
    const session = await stripe.checkout.sessions.retrieve(id, {
      expand: ["line_items"],
    });
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

payRouter.post("/getName", async (req, res) => {
  try {
    console.log("si entra a la ruta");
    const { idProduct } = req.body;
    const data = await stripe.products.retrieve(idProduct);
    console.log("esto es la data", data);
    console.log("esto es el data.name", data.name);
    // const product = await findProductByName(data.name);
    // console.log("esto es el product", product.content);
    const id = product[0].id;
    console.log(id);
    res.status(200).json(id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

payRouter.put("/updateProduct", async (req, res) => {
  try {
    const { name, info } = req.body;
    console.log("esto es el name", name);
    console.log("esto es la info", info);
    const { data } = await stripe.products.search({
      query: `name:"${name}"`,
    });
    console.log("esta es la respuesta de buscar el nombre: ", data);
    const productId = data[0].id;
    const request = await stripe.prices.search({
      query: `product:"${productId}"`,
    });
    console.log("esta es la respuesta de buscar el precio", request.data);
    const product = await stripe.products.update(`${productId}`, {
      name: info.name,
      description: info.description,
    });
    console.log("esta es la respuesta del producto", product);
    const priceId = request.data[0].id;

    const price = await stripe.prices.update(`${priceId}`, {
      unit_amount: Math.trunc(info.price * 100),
    });
    console.log("esta es la respuesta del price ", price);
    res.status(200).json({ ok: "todo salio bien" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = payRouter;
