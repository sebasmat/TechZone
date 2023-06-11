const { Router } = require("express");
const productsRouter = require("./Products/productsRouter");
const addProduct = require("./Products/addProduct");
const addUser = require("./User/addUser");
const PutUser = require("./User/PutUserData");
const getUserByEmail = require("./User/getUserByEmail");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/products", productsRouter); //GET
router.use("/create", addProduct);
router.use("/create", addUser);
router.use("/create", PutUser);
router.use("/users", getUserByEmail);

module.exports = router;
