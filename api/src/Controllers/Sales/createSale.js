const { Sales } = require("../../db");
const createSale = async (user, product) => {
  const venta = await Sales.create({ UserId: user });
  product.forEach(async (pr) => {
    await venta.addProducts(pr.id);
  });
  console.log("this is venta", venta);
  return venta;
};
module.exports = createSale;
