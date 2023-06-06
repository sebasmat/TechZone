const express = require("express");
const findAllProducts = require("../Controllers/findAllProducts")
const findProductByName = require("../Controllers/findProductByName")
const findById = require("../Controllers/findById")

const productsRouter = express.Router()

productsRouter.get("/", async (req, res) => {
    try {
        const {name} = req.query;
        if (name) {
            const productByName = await findProductByName(name)
            return res.status(200).json(productByName);
        }
        const allProducts = await findAllProducts()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
productsRouter.get("/:idProduct", async (req, res) => {
    try {
        const {idProduct} = req.params;
        const productById = await findById(idProduct)
        res.status(200).json(productById)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = productsRouter;