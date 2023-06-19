const { Products } = require("../../db");
const createProduct = async ({
  name,
  category,
  brand,
  images,
  description,
  price,
  avalaible,
  stock,
}) => {
  return await Products.create({
    name,
    category,
    brand,
    images,
    description,
    price,
    avalaible,
    stock,
  });
};
module.exports = createProduct;
