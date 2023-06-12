const express = require("express");
const modifyQuantity = require("../../Controllers/ShoppingCart/modifyQuantity");

const putItem = express.Router();

putItem.put("/item", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await modifyQuantity(userId, productId, quantity);
    if (cart && cart.Products.length > 0) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "No hay items en el carrito" });
    }
  } catch (error) {}
});

module.exports = putItem;
