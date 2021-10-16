const express = require('express')
const { getAllProducts, addProduct } = require('../controllers/productControllers')
const router = express.Router()

router.route("/products").get(getAllProducts)
router.route("/newProduct").post(addProduct)

module.exports = router