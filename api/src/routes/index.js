const { Router } = require("express");
const productsRouter = require("./Products/productsRouter");
const addProduct = require("./Products/addProduct");
const addUser = require("./User/addUser");
const PutUser = require("./User/PutUserData");
const getUserByEmail = require("./User/getUserByEmail");
const homeProductsRouter = require("./homeProductsRouter");
const categoriesRouter = require("./categoriesRouter");
const postItemsToCart = require("./ShoppingCart/postItems");
const payRouter = require("./payRouter");
const postItemToCart = require("./ShoppingCart/postItem");
const getIems = require("./ShoppingCart/getIems");
const deleteItem = require("./ShoppingCart/deleteItem");
const putItem = require("./ShoppingCart/putItem");
const succesRouter = require("./succes")
const modifyProduct = require("./Products/updateProduct");
const getUsers = require("./User/getUsers");
const updateUserEstate = require("./User/updateUserEstate");
const postItemFav = require("./Favorites/postItem");
const deleteItemFav = require("./Favorites/deleteItem");
const getItemsFav = require ("./Favorites/getItems")
const brandRouter = require("./brandRouter");
//const succesRouter = require("./succesRouter"); ERROR
const salesRouter = require("./Sales/addSales");

const addReview = require("./Review/addReview");
const getReview = require("../routes/Review/getReview")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/brands", brandRouter); //GET
router.use("/categories", categoriesRouter); //GET
router.use("/products", productsRouter); //GET
router.use("/homeproducts", homeProductsRouter); //GET
router.use("/create", addProduct);
router.use("/update", modifyProduct);
router.use("/create", addUser);
router.use("/create", PutUser);
router.use("/create", updateUserEstate);
router.use("/users", getUserByEmail);
router.use("/users", getUsers);
router.use("/cart", postItemsToCart);
router.use("/pay", payRouter);
router.use("/cart", postItemToCart);
router.use("/cart", getIems);
router.use("/cart", deleteItem);
router.use("/cart", putItem);
router.use("/confirmacion",succesRouter);
router.use("/favorites", getItemsFav);
router.use("/favorites", postItemFav);
router.use("/favorites", deleteItemFav);
router.use("/review", getReview)
router.use("/addreview", addReview)
router.use("/sales", salesRouter)
    

module.exports = router;
