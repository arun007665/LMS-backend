const express = require('express')
const mongoose = require('mongoose');
const Users = require('../models/User')
const routes = express.Router();


routes.post('/register', async (req, res)=>{
    try {
        const newUser = new Users(req.body);
        await newUser.save()
        res.status(200).json({msg:'user is created', user:newUser}); 
    } catch (error) {
        res.status(500).json({error:'user is not created', user:newUser})
    }
})

module.exports = routes;