const mongoose = require('mongoose')

const usreSchema = mongoose.Schema({
    userId: {type:String, required:true},

})

const User = new mongoose.model('user', usreSchema)
module.exports = User