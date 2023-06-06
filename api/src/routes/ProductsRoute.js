const { Router } = require("express");
const {
  getProductsIdHandler,
  getProductsHandler,
  postProductsHandler
} = require("../handlers/ProductsHandler");

const productsRouter = Router();

productsRouter.get("/", getProductsHandler);
productsRouter.get("/:id", getProductsIdHandler);
productsRouter.get("/?name", getProductsHandler);
productsRouter.post("/", getProductsIdHandler);

module.exports = productsRouter;