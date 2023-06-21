const { Review } = require("../../db")

const createReview = async ({
    review,
    score,
    UserId,
    ProductId
}) => {
    return await Review.create({
        review,
        score,
        UserId,
        ProductId
    })
}

module.exports = createReview;