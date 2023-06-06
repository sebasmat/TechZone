const { getDietsTypesDb } = require("../controllers/ProductsControllers");

const getDietsHandler = async (req, res) => {
  res.send(await getDietsTypesDb());
};

module.exports = { getDietsHandler };