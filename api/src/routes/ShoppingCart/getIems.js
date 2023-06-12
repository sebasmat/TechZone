const express = require("express");
const getItemsController = require("../../Controllers/ShoppingCart/getItemsController");

const getIems = express.Router();

getIems.get("/items/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await getItemsController(userId);
    if (cart && cart.Products.length > 0) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "No hay items en el carrito" });
    }
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = getIems;
