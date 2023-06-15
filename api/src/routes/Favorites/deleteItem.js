const express = require("express");
const RemoveItemFav = require ("../../Controllers/Favorite/removeItem")

const deleteItemFav = express.Router();

deleteItemFav.delete("/item/:userId/:productId", async (req , res) => {
    try {
        const {userId, productId} = req.params
        const fav = await RemoveItemFav(userId, productId);
        if (fav <= 0) {
            res.status(404).send("Item not found");
        } else {
            res.status(200).json(fav);
        }
    } catch (error) {
        res.status(500).send(console.log(error));
    }
});

module.exports = deleteItemFav;