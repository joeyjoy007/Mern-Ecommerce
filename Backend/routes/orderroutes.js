const express = require('express')
const { newOrder, getSingleOrder, myOrders, allOrder } = require('../controllers/ordercontroller')
const {authToken , authorizedRoles} = require('../Middelware/userAuthentication')

const app = express()

const router = express.Router();

router.route('/newOrder').post(authToken,newOrder)
router.route('/singleOrder/:id').get(authToken,getSingleOrder)
router.route('/myOrder').get(authToken,myOrders)
router.route('/allOrder').get(authToken,authorizedRoles('admin'),allOrder)

module.exports = router