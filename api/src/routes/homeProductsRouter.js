const express = require ('express');
const homeProducts = require ('../Controllers/homeProducts')
const homeProductsRouter = express.Router();

homeProductsRouter.get("/", async (req, res) => {
    try {
        const products = await homeProducts()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
});

module.exports = homeProductsRouter;