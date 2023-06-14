const express = require("express");
const getItemsControllerFav = require ("../../Controllers/Favorite/getitemsController")

const getItemsFav = express.Router();

getItemsFav.get("/items/:userId", async (req, res) => {
    try {
        const {userId} = req.params;
        const fav = await getItemsControllerFav(userId);
        if (fav && fav.Products.length >0) {
            res.status(200).json(cart);
        } else{
            res.status(404).json({message : "No hay items en Favoritos"})
        };
    } catch (error) {
        res.status(500).send(console.log(error))
    }
});

module.exports = getItemsFav;