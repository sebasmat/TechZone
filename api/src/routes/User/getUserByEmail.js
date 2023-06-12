const express = require("express");
const findUserByEmail = require("../../Controllers/User/findUserByEmail");

const getUserByEmail = express.Router();

getUserByEmail.get("/", async (req, res) => {
  try {
    const { email } = req.query;
    const user = await findUserByEmail(email);
    console.log("user", user);
    if (user === null) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = getUserByEmail;
