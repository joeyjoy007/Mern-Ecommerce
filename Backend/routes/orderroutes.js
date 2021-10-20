const express = require('express')
const { newOrder } = require('../controllers/ordercontroller')
const {authToken , authorizedRoles} = require('../Middelware/userAuthentication')

const app = express()

const router = express.Router();

router.route('/newOrder').post(authToken,newOrder)

module.exports = router