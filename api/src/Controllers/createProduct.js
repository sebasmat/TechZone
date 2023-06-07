const { Products } = require("../db")
const createProduct = async ({name, category, brand, images, description, price, avalaible, stock }) => {
    const addProduct = await Products.create({name, category, brand, images, description, price, avalaible, stock });
    return addProduct;
}
module.exports = createProduct;

