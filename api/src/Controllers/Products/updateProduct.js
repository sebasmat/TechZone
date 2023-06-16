const { Products } = require("../../db");
const updateProduct = async ({
  id,
  name,
  category,
  brand,
  images,
  description,
  price,
  avalaible,
  stock,
}) => {
  console.log(`this is avalaible ${avalaible}`);
  return await Products.upsert({
    id,
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
module.exports = updateProduct;
