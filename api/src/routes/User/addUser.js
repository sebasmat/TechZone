const express = require("express");
const createUsers = require("../../Controllers/User/createUsers");

const addUser = express.Router();

addUser.post("/User", async (req, res) => {
  console.log(
    "entro antes del try en el post user email is: " + req.body.email
  );
  try {
    console.log("entro en el create user y el email es: ", req.body.email);
    const { email } = req.body;
    const addUser = await createUsers({ email });
    res.status(200).json(addUser);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

module.exports = addUser;
