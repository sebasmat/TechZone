const {Products} = require ("../../db")

const getCombineFilter = async (category, brand) => {
    const productsCombine = await Products.findAll({
        where: {
            category,
            brand
        }
    })
    return productsCombine
}

module.exports = getCombineFilter
