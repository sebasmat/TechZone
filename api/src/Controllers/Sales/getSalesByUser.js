const { Sales, Users, Products } = require("../../db");
const getSalesByUser = async (id) => {
  const salesByUser = await Sales.findAll({
    where:{
        UserId: id
    },
    include: [
        {
            model:Users
        },
        {
            model:Products
        }
    ]
  });
  
  return salesByUser;
};
module.exports = getSalesByUser;