const account = require("../model/accountSchema")
const User = require("../model/userSchema")
const {encrypt, decrypt} = require('../bcrypt/hash')
const homepage = (req,res) => {
    res.send('add account')
}
const addAccount = async(req,res) => {
    try {
        const userInfo = await User.findOne({userId:req.body.userId})
        let hashedPassword = encrypt(req.body.password)
        console.log(hashedPassword)
        const response = await account.create({
            accountName:req.body.accountName,
            password:hashedPassword,
            userId:userInfo._id
        })
        res.status(201).json({message:"Account saved sucessfully"})
    } catch (error) {
        console.log(error)
    }
}

const getPassword = async(req,res) => {
    try {
        let data = []
        let id = req.body.userId
        const user = await User.findOne({userId:id})
        const response = await account.find({userId:user._id})
        response.forEach((d) => {
            let originalPassword = decrypt(d.password)
            let obj = {
                accountName: d.accountName,
                password: originalPassword
            }
            data.push(obj)
        })

        res.send(data)
        
    } catch (error) {
        
    }
}

module.exports = {addAccount, homepage, getPassword}