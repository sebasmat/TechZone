const { Users, Products, Cart } = require("../../db");

const getItemsController = async (userId) => {
  const cart = await Users.findOne({
    where: { id: userId },
    include: Products,
  });
  return cart;
};

module.exports = getItemsController;
