const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct, getOneProduct, getProductDetail } = require('../controllers/productControllers')
const {authToken , authorizedRoles} = require('../Middelware/userAuthentication')

const router = express.Router()

router.route("/products").get(authToken,authorizedRoles("admin"),getAllProducts)
router.route("/newProduct").post(authToken,addProduct)
router.route("/updateProduct/:id").put(authToken,updateProduct)
router.route("/deleteProduct/:id").delete(authToken,deleteProduct)
router.route("/getProductDetail/:id").get(getProductDetail)
    

module.exports = router