var CryptoJS = require("crypto-js");
const salt = process.env.SECRET_KEY
// Encrypt
var encrypt = (password) => {
   const hashedPassword = CryptoJS.AES.encrypt(password, salt).toString();
   // console.log(hashedPassword)
   return hashedPassword
}
   

// Decrypt
const decrypt = (hashedPassword) => {
   var bytes  = CryptoJS.AES.decrypt(hashedPassword, salt);
   var originalText = bytes.toString(CryptoJS.enc.Utf8);
   // console.log(originalText)
   return originalText

}

module.exports = {encrypt, decrypt}