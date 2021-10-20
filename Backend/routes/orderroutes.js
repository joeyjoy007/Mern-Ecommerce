const express = require('express')
const { newOrder, getSingleOrder, myOrders } = require('../controllers/ordercontroller')
const {authToken , authorizedRoles} = require('../Middelware/userAuthentication')

const app = express()

const router = express.Router();

router.route('/newOrder').post(authToken,newOrder)
router.route('/singleOrder/:id').get(authToken,authorizedRoles('admin'),getSingleOrder)
router.route('/myOrder').get(authToken,myOrders)

module.exports = router