const express = require("express");
const {Review} = require("../../db");

const getReview = express.Router();

getReview.get("/products/:id", (req, res) =>{
    try {
        const {id} = req.params
        res.status(200).send(id) 
    } catch (error) {
        res.status(500).send(console.log(error));
    }
})

module.exports = getReview;