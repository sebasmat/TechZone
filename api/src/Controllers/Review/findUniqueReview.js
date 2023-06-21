const { Review, Users } = require("../../db")

const findUniqueReview = async (user, product) => {
    const review = await Review.findOne({
        where: {
            UserId: user,
            ProductId: product
        },
        include: [{
            model: Users
        }]
    })
    return review
}

module.exports = findUniqueReview;