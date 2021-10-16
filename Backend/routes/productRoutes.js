const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/productControllers')
const router = express.Router()

router.route("/products").get(getAllProducts)
router.route("/newProduct").post(addProduct)
router.route("/updateProduct/:id").put(updateProduct)
router.route("/deleteProduct/:id").delete(deleteProduct)
    

module.exports = router