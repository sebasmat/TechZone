const express = require ("express");
const addFav = require ("../../Controllers/Favorite/addItem");

const postItemFav = express.Router();

postItemFav.post("/item", async (req, res) => {
    try {
        const { item} = req.body;
        const Fav = await addFav(item);
        res.status(200).json(Fav);
    } catch (error) {
        res.status(500).send(console.log(error));
    }
})

module.exports = postItemFav;