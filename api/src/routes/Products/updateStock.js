const express = require("express");
const updateStockById = require("../../Controllers/Products/updateStockById");

const updateStock = express.Router();

updateStock.put("/", async (req, res) => {
  try {
    console.log("si entra al put");
    const {products} = req.body;
    console.log("este es el products", products);
    const stockUpdated = await updateStockById(products)
    res.status(200).json(stockUpdated);
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});

module.exports = updateStock;
