const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct, getOneProduct, getProductDetail } = require('../controllers/productControllers')
const authToken = require('../Middelware/userAuthentication')
const router = express.Router()

router.route("/products").get(authToken,getAllProducts)
router.route("/newProduct").post(addProduct)
router.route("/updateProduct/:id").put(updateProduct)
router.route("/deleteProduct/:id").delete(deleteProduct)
router.route("/getProductDetail/:id").get(getProductDetail)
    

module.exports = router