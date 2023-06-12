const { Users, Products, Products } = require("../db");

const actualizarStock = async (userId, productId, stock) => {
  await Products.update(
    {stock: stock },
    { where: { UserId: userId, ProductId: productId } }
  );

  const cart = await Users.findOne({
    where: { id: userId },
    include: Products,
  });
  return cart;
};

module.exports = actualizarStock;