const { Router } = require('express');
const UsersRouter = require("./UsersRoute");
const ProductsRouter = require('./ProductsRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/Users", UsersRouter)
router.use("/Products", ProductsRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
 