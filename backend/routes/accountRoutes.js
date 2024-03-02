const express = require('express')
const router = express.Router()
const {addAccount, homepage, getPassword} = require('../controller/accountController')

router.route('/add-account').post(addAccount)
router.route('/').get(homepage)
router.route('/get-password').post(getPassword)
module.exports = router