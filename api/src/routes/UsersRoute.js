const { Router } = require("express");
const {getUserHandler}  = require("../controllers/UsersControllers");

const userRouter = Router();


userRouter.get("/",getUserHandler);

module.exports = userRouter;