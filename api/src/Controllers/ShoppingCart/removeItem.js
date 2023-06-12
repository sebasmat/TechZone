const { Users, Products, Cart } = require("../../db");

const removeItem = async (userId, productId) => {
  const deletedCart = await Cart.destroy({
    where: {
      UserId: userId,
      ProductId: productId,
    },
  });
  return deletedCart;
};

module.exports = removeItem;
