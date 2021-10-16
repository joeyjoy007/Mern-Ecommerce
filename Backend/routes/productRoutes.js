const express = require('express')
const { getAllProducts, addProduct, updateProduct } = require('../controllers/productControllers')
const router = express.Router()

router.route("/products").get(getAllProducts)
router.route("/newProduct").post(addProduct)
router.route("/updateProduct/:id").put(updateProduct)

module.exports = router