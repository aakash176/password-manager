const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    accountName: {type:String, required:true},
    password: {type:String, required:true},
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const account = new mongoose.model('account', accountSchema)

module.exports = account