const express = require('express')
const router = express.Router()
const {loginRoute,registerRoute} = require('../controller/userController')

router.route('/login').post(loginRoute)
router.route('/register').post(registerRoute)
module.exports = router