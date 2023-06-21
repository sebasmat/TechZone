const express = require("express");
const changeEstate = require("../../Controllers/User/changeEstate");

const updateUserEstate = express.Router();

updateUserEstate.put("/User/estate/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const putUser = await changeEstate(email);

    return res.status(200).json(putUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = updateUserEstate;
