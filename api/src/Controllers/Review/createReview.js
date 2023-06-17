const { Review } = require("../../db")

const createReview = async ({
    review,
    score,
    userId,
    productsId
}) => {
    return await Review.create({
        review,
        score,
        userId,
        productsId
    })
}

module.exports = createReview;