const { Users, Products, Cart } = require("../../db");

const modifyQuantity = async (userId, productId, quantity) => {
  await Cart.update(
    { quantity: quantity },
    { where: { UserId: userId, ProductId: productId } }
  );

  const cart = await Users.findOne({
    where: { id: userId },
    include: Products,
  });
  return cart;
};

module.exports = modifyQuantity;
