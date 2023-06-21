const {Review} = require("../../db")

const updateReviewController = async ({
    id,
    review,
    score,
    UserId,
    ProductId
}) => {
    return await Review.upsert({
        id,
        review,
        score,
        UserId,
        ProductId
    });
};

module.exports = updateReviewController;