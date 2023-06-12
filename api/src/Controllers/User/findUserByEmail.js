const { Users } = require("../../db");

async function findUserByEmail(email) {
  const user = await Users.findOne({
    where: {
      email,
    },
  });
  return user;
}

module.exports = findUserByEmail;
