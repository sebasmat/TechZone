const { Users } = require("../../db");

async function getAllUsers() {
  return await Users.findAll();
}

module.exports = getAllUsers;
