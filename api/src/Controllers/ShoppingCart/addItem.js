const { Users, Products, Cart } = require("../../db");

const addItem = async (cartItem) => {
  await Cart.create({
    UserId: cartItem.userId,
    ProductId: cartItem.productId,
    quantity: cartItem.quantity,
  });

  const cart = await Users.findOne({
    where: { id: cartItem.userId },
    include: Products,
  });
  return cart;
};

module.exports = addItem;