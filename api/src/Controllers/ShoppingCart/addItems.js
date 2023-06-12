const { Users, Products, Cart } = require("../../db");

// { userId, productId, quantity }
const addItems = async (cartItems) => {
  const user = await Users.findByPk(cartItems[0].userId);

  let allItemsPromises = [];
  for (let i = 0; i < cartItems.length; i++) {
    allItemsPromises.push(Products.findByPk(cartItems[i].productId));
  }
  const allItems = await Promise.all(allItemsPromises);

<<<<<<< HEAD
  // console.log(allItems[0]);

=======
>>>>>>> 2aa93ca53498ac551610048ca4cbf55fbeebb1e0
  let itemsAddToCartUsers = [];
  for (let i = 0; i < allItems.length; i++) {
    itemsAddToCartUsers.push(
      Cart.upsert({
        UserId: user.id,
        ProductId: allItems[i].id,
        quantity: cartItems[i].quantity,
      })
    );
  }
  await Promise.all(itemsAddToCartUsers);

  const cart = await Users.findOne({
    where: { id: user.id },
    include: Products,
  });
  return cart;
};

module.exports = addItems;
