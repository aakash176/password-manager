const account = require("../model/accountSchema")
const User = require("../model/userSchema")
const {
    encrypt,
    decrypt
} = require('../bcrypt/hash')
const homepage = (req, res) => {
    res.send('add account')
}
const addAccount = async (req, res) => {
    try {

        let data = []
        const userInfo = await User.findOne({
            userId: req.body.userId
        })
        let hashedPassword = encrypt(req.body.password)
        console.log(hashedPassword)
        await account.create({
            accountName: req.body.accountName,
            password: hashedPassword,
            userId: userInfo._id
        })

        const response = await account.find({
            userId: userInfo._id
        })
        response.forEach((d) => {
            let originalPassword = decrypt(d.password)
            let obj = {
                accountName: d.accountName,
                password: originalPassword
            }
            data.push(obj)
        })

        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
}
const updatePassword = async (req, res) => {
    try {
        const filter = {
            _id: req.body.id
        }
        let hashedPassword = encrypt(req.body.password)
        const update = {
            accountName: req.body.accountName,
            password: hashedPassword
        }
        console.log(filter, update);
        await account.findOneAndUpdate(filter, update, {
            new: true
        })
        
        res.status(200).send('account updated')
    } catch (error) {
        console.log('error while updating document', error)

    }


}

const deleteAccount = async (req, res) => {
    try {
        console.log(req.body.id)
        const acc = await account.deleteOne({
            _id: req.body.id
        })
        res.send(acc)
    } catch (error) {
        console.log('error while deleting accout', error)

    }
}
const getPassword = async (req, res) => {
    try {
        let data = []
        let id = req.body.userId
        console.log(id)
        const user = await User.findOne({
            userId: id
        })
        const response = await account.find({
            userId: user._id
        })
        response.forEach((d) => {
            let originalPassword = decrypt(d.password)
            let obj = {
                accountName: d.accountName,
                password: originalPassword,
                id: d._id
            }
            data.push(obj)
        })

        console.log(data)

        res.send(data)

    } catch (error) {

    }
}

module.exports = {
    addAccount,
    homepage,
    getPassword,
    deleteAccount,
    updatePassword
}