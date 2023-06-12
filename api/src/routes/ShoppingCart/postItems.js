const express = require("express");
const addItems = require("../../Controllers/ShoppingCart/addItems");

const postItems = express.Router();

postItems.post("/", async (req, res) => {
  try {
    // console.log(`this is data from items: `, req.body.cartItems);
    const { cartItems } = req.body;
    const cart = await addItems(cartItems);

    // console.log(`this is cart response ${JSON.stringify(cart)}`);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = postItems;
