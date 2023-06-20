const express = require("express");
const updateReviewController = require("../../Controllers/Review/updateReviewController");

const updateReview = express.Router();

updateReview.put("/", async (req, res) => {
    const {
        id,
        review,
        score,
        userId,
        productsId
    } = req.body
    try {
        const newReview = updateReviewController({
            id,
            review,
            score,
            userId,
            productsId
        })
        res.status(200).json(newReview);
    } catch (error) {
        res.status(500).send(console.log(error));
    }
})

module.exports = updateReview;