const express = require("express");
const putUsers = require("../../Controllers/User/PutUsers");
const { Users } = require("../../db");




const PutUserData = express.Router();

PutUserData.put("/User/:Useremail", async (req, res) => {
    try {
        const {email} = req.params;
        const { name , profileIMG, direction, cellPhone, Gender} = req.body;
        const putUser = await putUsers({email,  name , profileIMG, direction, cellPhone, Gender})
        return res.status(200).json({ users: putUser });
        
    } catch (error) {
        
    }
})

module.exports =  PutUserData;
