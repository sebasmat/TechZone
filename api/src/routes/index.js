const { Router } = require('express');
const productsRouter = require('./productsRouter');
const addProduct = require('./addProduct');
const homeProductsRouter = require('./homeProductsRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.use('/products', productsRouter) //GET
router.use('/homeproducts', homeProductsRouter) //GET
router.use('/create', addProduct)

module.exports = router;
