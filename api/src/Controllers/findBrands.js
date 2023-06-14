const { Products } = require('../db')

const findBrand = async () => {
    const brand = await Products.findAll({
        attributes: ["brand"],
        group: ["brand"]
    }
    );
    return brand
}

module.exports = findBrand;
