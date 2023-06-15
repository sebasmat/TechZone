const express = require ('express');
const brandRouter = express.Router();
const findBrand = require('../Controllers/findBrands')

brandRouter.get("/", async (req, res) => {
    try {
        const brand = await findBrand()
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
});

module.exports = brandRouter;