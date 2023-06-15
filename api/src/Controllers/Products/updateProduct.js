const { Products } = require("../../db")
const updateProduct = async (id,quantity) => {
    const product = await Products.findByPk(id);
    product.stock = product.stock - quantity;
    return product;
}
module.exports = updateProduct;
