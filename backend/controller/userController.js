const account = require("../model/accountSchema")
const User = require("../model/userSchema")

// const loginRoute = async(req,res) => {
//     try{
        
//         let accounts = await account.find({userId: req.body.userId})
//         console.log(accounts)
//     }
//     catch(err){
//         console.error(err)
//     }
// }


const registerRoute = async(req,res) => {
    try{
        const response = await User.create({
            userId:req.body.userId
        })

        res.send(response)
    } catch(err){
        console.log(err)
    }
}

module.exports = { registerRoute}