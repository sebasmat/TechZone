const { getAllUsersDb } = require("../controllers/UsersControllers");

const getUserHandler = async (req, res) => {
  res.send(await getAllUsersDb());
};

module.exports = { getDietsHandler };