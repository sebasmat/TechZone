const express = require("express");
const putUsers = require("../../Controllers/User/PutUsers");

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
    return res.status(200).json(putUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = PutUserData;
