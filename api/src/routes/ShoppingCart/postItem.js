const express = require("express");
const addItem = require("../../Controllers/ShoppingCart/addItem");

const postItem = express.Router();

postItem.post("/item", async (req, res) => {
  try {
    const { cartItem } = req.body;
    const cart = await addItem(cartItem);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = postItem;