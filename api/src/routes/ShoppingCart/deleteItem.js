const express = require("express");
const removeItem = require("../../Controllers/ShoppingCart/removeItem");

const deleteItem = express.Router();

deleteItem.delete("/item/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const cart = await removeItem(userId, productId);
    if (cart <= 0) {
      res.status(404).send("Item not found");
    } else {
      res.status(200).json(cart);
    }
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = deleteItem;
