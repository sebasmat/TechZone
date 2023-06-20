const { Review } = require("../../db")

const findReviewByProduct = async (productId) => {
    const review = await Review.findAll({ where: { productsId: productId } })
    return review;
}

module.exports = findReviewByProduct;