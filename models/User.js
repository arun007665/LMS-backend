const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    course:String
})

module.exports = mongoose.model('userData', userSchema)