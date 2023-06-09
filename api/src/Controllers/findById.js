const { Products } = require("../db")

const findProduct = async (idProduct) => {
      const productById = await Products.findByPk(idProduct);
      return productById;
}

module.exports = findProduct;