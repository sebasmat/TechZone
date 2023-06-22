const express = require("express");
const createReview = require("../../Controllers/Review/createReview");

const addReview = express.Router();

addReview.post("/", async (req, res) => {
    try {
        const {
            review,
            score,
            ProductId,
            UserId
        } = req.body
        const newReview = await createReview({
            review,
            score,
            ProductId,
            UserId
        })
        res.status(200).json(newReview)
    } catch (error) {
        res.status(500).send(console.log(error));
    };
});

module.exports = addReview;