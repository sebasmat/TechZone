const { Review , User} = require("../../db")

const findUniqueReview = async (user, product) => {
    const review = await Review.findOne({
        where: {
            userId: user,
            productsId: product
        },
        include:{
            model: User
        }
    })
    return review
}

module.exports = findUniqueReview;