const express = require("express");
const createSale = require("../../Controllers/Sales/createSale");
const getSales = require("../../Controllers/Sales/getSales");
const getSalesByUser = require("../../Controllers/Sales/getSalesByUser");
const salesRouter = express.Router();

salesRouter.post("/", async (req, res) => {
  try {
    console.log("entro en el post sales");
    const { user, product } = req.body;
    const response = await createSale(user[0].id, product);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(console.log(error));
  }
});

salesRouter.get("/", async (req, res) => {
  try {
    const sales = await getSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

salesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("si entra a la ruta y este es el id:", id);
    const getSales = await getSalesByUser(id);
    res.status(200).json(getSales);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
});

module.exports = salesRouter;
