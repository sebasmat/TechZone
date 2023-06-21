const { Review, Users } = require("../../db")

const findReviewByProduct = async (productId) => {
    const review = await Review.findAll({
        where: {
            productsId: productId
        },
        include: [
            {
                model:Users
            }
        ]
    })
    return review;
}

module.exports = findReviewByProduct;