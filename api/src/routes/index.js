const { Router } = require('express');
const productsRouter = require('./productsRouter');
const addProduct = require('./addProduct');
const addUser = require("./addUser")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/products', productsRouter) //GET
router.use('/create', addProduct)
router.use("/user/create", addUser)

module.exports = router;
