const express = require("express");
const findAllProducts = require("../../Controllers/Products/findAllProducts")
const findProductByName = require("../../Controllers/Products/findProductByName")
const findById = require("../../Controllers/Products/findById")
const { Products } = require('../../db')
const combineFilter = require("../../Controllers/Products/combineFilter")
const findProductByBrand = require("../../Controllers/Products/findProductByBrand")
const findProductByCategory = require("../../Controllers/Products/findProductByCategory")


const productsRouter = express.Router()

productsRouter.get("/", async (req, res) => {
    try {
        const { name, category, brand } = req.query
        if (category && brand) {
            const productCombine = await combineFilter(category, brand)
            return res.status(200).json({
                content: productCombine,
                totalPages: 1
            })
        }
        if (category) {
            const productByCategory = await findProductByCategory(category)
            return res.status(200).json({
                content: productByCategory,
                totalPages: 1
            })
        }
        if (brand) {
            const productByBrand = await findProductByBrand(brand)
            return res.status(200).json({
                content: productByBrand,
                totalPages: 1
            })
        }
        if (name) {
            const productByName = await findProductByName(name)
            return res.status(200).json(productByName)
        }

        const pageAsNumber = Number.parseInt(req.query.page)
        const sizeAsNumber = Number.parseInt(req.query.size)
        let page = 0;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
            page = pageAsNumber
        }

        let size = 10
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
            size = sizeAsNumber
        }
        const allProducts = await Products.findAndCountAll({
            limit: size,
            offset: page * size
        })

        // console.log(allProducts.rows);
        res.status(200).json({
            content: allProducts.rows,
            totalPages: Math.ceil(allProducts.count / size)
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
productsRouter.get("/:idProduct", async (req, res) => {
    try {
        const { idProduct } = req.params;
        const productById = await findById(idProduct)
        res.status(200).json(productById)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = productsRouter;