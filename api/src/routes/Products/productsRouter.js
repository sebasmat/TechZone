const express = require("express");
const findAllProducts = require("../../Controllers/Products/findAllProducts")
const findProductByName = require("../../Controllers/Products/findProductByName")
const findById = require("../../Controllers/Products/findById")
const { Products } = require('../../db')
const combineFilter = require("../../Controllers/Products/combineFilter")
const findProductByBrand = require("../../Controllers/Products/findProductByBrand")
const findProductByCategory = require("../../Controllers/Products/findProductByCategory");
const filterByPrice = require("../../Controllers/Products/filterByPrice");
const combineFilterByPrice = require("../../Controllers/Products/priceCombineFilter");
const combineFilterByPriceCategory = require("../../Controllers/Products/combineFilterByPriceCategory");
const combineFilterByPriceBrand = require("../../Controllers/Products/combineFilterByPriceBrand");


const productsRouter = express.Router()

productsRouter.get("/", async (req, res) => {
    const { name, category, brand, minPrice, maxPrice  } = req.query;

    const pageAsNumber = Number.parseInt(req.query.page)
    const sizeAsNumber = Number.parseInt(req.query.pageSize)

  if (name) {
    return findProductByName(req,res)
}

    if (category && brand) {
    return combineFilter(req, res);
  } else if (category && maxPrice && minPrice) {
    return combineFilterByPriceCategory(req, res)
  } else if (category && brand && maxPrice && minPrice) {
    console.log('llega hasta aca');
    return combineFilterByPrice(req, res)
  } else if (brand && maxPrice && minPrice) {
    return combineFilterByPriceBrand(req, res)
  } else if (maxPrice && minPrice) {
    return filterByPrice(req, res)
  } else if (category) {
    return findProductByCategory(req, res);
  } else if (brand) {
    return findProductByBrand(req, res);
  } else {
    try {
        let page = 0;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
            page = pageAsNumber
        }

        let size = 10
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
            size = sizeAsNumber
        }
      const allProducts = await Products.findAndCountAll({
        limit: size,
        offset: page * size
      });

      const totalPages = Math.ceil(allProducts.count / size);

      res.json({
        totalPages,
        content: allProducts.rows,
        origin: ["all"]
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});


// productsRouter.get("/", async (req, res) => {
//     try {
//         const { name, page, pageSize, category, brand } = req.query

//         const offset = (page - 1) * pageSize
//         const limit = parseInt(pageSize)

//         if (category && brand) {
//             const productCombine = await combineFilter(category, brand)
//             return res.status(200).json({
//                 content: productCombine,
//                 totalPages: 1
//             })
//         }
//         if (category) {
//             const productByCategory = await findProductByCategory(category)
//             return res.status(200).json({
//                 content: productByCategory,
//                 totalPages: 1
//             })
//         }
//         if (brand) {
//             const productByBrand = await findProductByBrand(brand)
//             return res.status(200).json({
//                 content: productByBrand,
//                 totalPages: 1
//             })
//         }
//         if (name) {
//             const productByName = await findProductByName(name)
//             return res.status(200).json(productByName)
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })
productsRouter.get("/:idProduct", async (req, res) => {
    try {
        const { idProduct } = req.params;
        const productById = await findById(idProduct)
        res.status(200).json(productById)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

productsRouter.post("/:idProduct", async (req,res)=>{
    console.log("si entra a la ruta");
    try {
        console.log("si entra a la ruta");
        const {idProduct} = req.params;
        const {quantity} = req.body;
        const productUpdated = await updateProduct(idProduct,quantity);
        console.log(productUpdated);
        res.status(200).json(productUpdated);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
})


module.exports = productsRouter;