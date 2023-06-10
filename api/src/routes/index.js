const { Router } = require('express');
const productsRouter = require('./Products/productsRouter');
const addProduct = require('./Products/addProduct');
const addUser = require("./User/addUser")
const PutUser = require ("./User/PutUserData") 
const homeProductsRouter = require('./homeProductsRouter');
const categoriesRouter = require('./categoriesRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/categories', categoriesRouter)//GET
router.use('/products', productsRouter) //GET
router.use('/homeproducts', homeProductsRouter) //GET
router.use('/create', addProduct)
router.use("/create", addUser)
router.use("/create", PutUser)

module.exports = router;
