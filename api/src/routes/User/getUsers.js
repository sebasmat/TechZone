const express = require("express");
const getAllUsers = require("../../Controllers/User/getAllUsers");

const getUsers = express.Router();

getUsers.get("/all", async (req, res) => {
  try {
    const user = await getAllUsers();
    if (user === null) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = getUsers;
