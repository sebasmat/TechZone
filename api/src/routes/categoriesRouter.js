const express = require ('express');
const categoriesRouter = express.Router();
const findCategories = require('../Controllers/findCategories')

categoriesRouter.get("/", async (req, res) => {
    try {
        const categories = await findCategories()
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
});

module.exports = categoriesRouter;