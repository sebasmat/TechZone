const { Sales, Users, Products } = require("../../db");
const getSales = async () => {
  const sales = await Sales.findAll({
    include: [
        {
            model:Users
        },
        {
            model:Products
        }
    ]
  });
  return sales;
};
module.exports = getSales;