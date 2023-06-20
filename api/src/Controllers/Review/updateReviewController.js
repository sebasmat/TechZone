const {Review} = require("../../db")

const updateReviewController = async ({
    id,
    review,
    score,
    userId,
    productsId
}) => {
    return await Review.upsert({
        id,
        review,
        score,
        userId,
        productsId
    });
};

module.exports = updateReviewController;