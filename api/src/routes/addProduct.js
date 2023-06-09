const express = require("express");
const createProduct = require("../Controllers/Products/createProduct");

const addProduct = express.Router();

addProduct.post("/", async (req, res) => {
    try {
        const {name, category, brand, images, description, price, avalaible, stock} = req.body;
        const addProduct = await createProduct({name, category, brand, images, description, price, avalaible, stock});
        res.status(200).json(addProduct);
    } catch (error) {
        res.status(500).send(console.log(error));
    };
});

module.exports = addProduct;