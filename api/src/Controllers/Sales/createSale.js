const { Sales } = require("../../db");
const createSale = async (user,product) => {
  const venta = await Sales.create({UserId: user});
  product.forEach(async (pr) => {
    await venta.addProducts(pr.id);
});
  return venta;
};
module.exports = createSale;