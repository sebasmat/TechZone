const express = require("express");
const putUsers = require("../../Controllers/User/PutUsers");
const { Users } = require("../../db");

const PutUserData = express.Router();

PutUserData.put("/User/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { name, profileIMG, direction, cellPhone, Gender } = req.body;
    const putUser = await putUsers({
      email,
      name,
      profileIMG,
      direction,
      cellPhone,
      Gender,
    });
    // console.log(`this is putUser: ${JSON.stringify(putUser)}`);
    return res.status(200).json(putUser);
  } catch (error) {
    // console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = PutUserData;
