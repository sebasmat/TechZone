const {Products} = require ("../../db")

const getProductsByCategory = async (category) => {
    const productsCategory = await Products.findAll({
        where: {
            category: category
        }
    })
    return productsCategory
}

module.exports = getProductsByCategory
