const { Products } = require("../db")

const findAllProducts = async () => {
    const products = await Products.findAll();
    return products;
};

module.exports = findAllProducts; 