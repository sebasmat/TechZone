const express = require("express");
const { Review } = require("../../db");
const findReviewByProduct = require("../../Controllers/Review/findReviewByProduct");
const findUniqueReview = require("../../Controllers/Review/findUniqueReview");

const getReview = express.Router();

getReview.get("/products/:idProduct", async (req, res) => {
    try {
        const { idProduct } = req.params
        const getReviewByProduct = await findReviewByProduct(idProduct);
        res.status(200).send(getReviewByProduct)
    } catch (error) {
        res.status(500).send(console.log(error));
    }
})

getReview.get("/", async (req, res) => {
    try {
        const { user, product } = req.query;
        const getUniqueReview = await findUniqueReview(user, product);
        res.status(200).json(getUniqueReview)
    } catch (error) {
        res.status(500).send(console.log(error));
    }
})

module.exports = getReview;