const express = require("express");
const addItems = require("../../Controllers/ShoppingCart/addItems");

const postItems = express.Router();

postItems.post("/items", async (req, res) => {
  try {
    const { cartItems } = req.body;
    const cart = await addItems(cartItems);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = postItems;