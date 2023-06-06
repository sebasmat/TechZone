const { Router } = require("express");
const {getDietsHandler}  = require("../controllers/UsersControllers");

const dietsRouter = Router();

dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;