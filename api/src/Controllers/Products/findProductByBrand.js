const {Products} = require ("../../db")

const getProductsByBrand = async (brand) => {
    const productsBrand = await Products.findAll({
        where: {
            brand
        }
    })
    return productsBrand
}

module.exports = getProductsByBrand
