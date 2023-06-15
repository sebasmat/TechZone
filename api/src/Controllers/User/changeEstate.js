const { Users } = require("../../db");

const changeEstate = async (email) => {
  const PutDataUser = await Users.findOne({ where: { email: email } });
  return await PutDataUser.update({
    available: !PutDataUser.available,
  });
};

module.exports = changeEstate;
