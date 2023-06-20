const { Review } = require("../../db")

const findUniqueReview = async (user, product) => {
    const review = await Review.findOne({
        where: {
            userId: user,
            productsId: product
        }
    })
    return review
}

module.exports = findUniqueReview;