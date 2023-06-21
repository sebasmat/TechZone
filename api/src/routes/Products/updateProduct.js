const express = require("express");
const updateProduct = require("../../Controllers/Products/updateProduct");

const modifyProduct = express.Router();

modifyProduct.put("/", async (req, res) => {
  try {
    const {
      id,
      name,
      category,
      brand,
      images,
      description,
      price,
      avalaible,
      stock,
    } = req.body;

    const product = await updateProduct({
      id,
      name,
      category,
      brand,
      images,
      description,
      price,
      avalaible,
      stock,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = modifyProduct;
