const express = require("express");
const updateReviewController = require("../../Controllers/Review/updateReviewController");

const updateReview = express.Router();

updateReview.put("/", async (req, res) => {
    const {
        id,
        review,
        score,
        UserId,
        ProductId
    } = req.body
    try {
        const newReview = updateReviewController({
            id,
            review,
            score,
            UserId,
            ProductId
        })
        res.status(200).json({
            content: newReview,
            aprovved: true,
        });
    } catch (error) {
        res.status(500).send(console.log(error));
    }
})

module.exports = updateReview;