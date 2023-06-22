const { Review, Users } = require("../../db")

const findReviewByProduct = async (productId) => {
    const review = await Review.findAll({
        where: {
            ProductId: productId
        },
        include: [{
            model: Users
        }]
    })
    return review;
}

module.exports = findReviewByProduct;