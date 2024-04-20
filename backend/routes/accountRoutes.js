const express = require('express')
const router = express.Router()
const {addAccount, homepage, getPassword, deleteAccount, updatePassword} = require('../controller/accountController')

router.route('/add-account').post(addAccount)
router.route('/').get(homepage)
router.route('/get-password').post(getPassword)
router.route('/delete').post(deleteAccount)
router.route('/update').post(updatePassword)
module.exports = router