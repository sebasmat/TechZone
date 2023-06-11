const { Users, Products } = require("../../db");

// { userId, productId, quantity }
const addItems = async (cartItems) => {
  const user = await Users.findByPk(cartItems[0].userId);

  let allItemsPromises = [];
  for (let i = 0; i < cartItems.length; i++) {
    allItemsPromises.push(Products.findByPk(cartItems[i].productId));
  }
  const allItems = await Promise.all(allItemsPromises);

  console.log(allItems[0]);

  let itemsAddToCartUsers = [];
  for (let i = 0; i < allItems.length; i++) {
    itemsAddToCartUsers.push(
      user.addProduct(allItems[i], {
        through: { quantity: cartItems[i].quantity },
      })
    );
  }
  await Promise.all(itemsAddToCartUsers);

  await user.addProducts(allItems[0], {
    through: { quantity: 1 },
  });

  const cart = await Users.findOne({
    where: { id: cartItems[0].userId },
    include: Products,
  });
  return cart;
};

module.exports = addItems;
