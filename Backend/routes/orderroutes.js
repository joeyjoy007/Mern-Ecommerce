const express = require('express')
const { newOrder, getSingleOrder, myOrders, allOrder, updateOrder, deleteOrder } = require('../controllers/ordercontroller')
const {authToken , authorizedRoles} = require('../Middelware/userAuthentication')

const app = express()

const router = express.Router();

router.route('/newOrder').post(authToken,newOrder)
router.route('/singleOrder/:id').get(authToken,getSingleOrder)
router.route('/myOrder').get(authToken,myOrders)
router.route('/allOrder').get(authToken,authorizedRoles('admin'),allOrder)
router.route('/updateOrder/:id').put(authToken,authorizedRoles('admin'),updateOrder)
router.route('/deleteOrder/:id').delete(authToken,authorizedRoles('admin'),deleteOrder)

module.exports = router