const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct, getOneProduct, getProductDetail, productReviews, getTotalReviews, deleteReview } = require('../controllers/productControllers')
const {authToken , authorizedRoles} = require('../Middelware/userAuthentication')

const router = express.Router()

router.route("/products").get(getAllProducts)
router.route("/admin/newProduct").post(authToken,authorizedRoles("admin"),addProduct)
router.route("/admin/Product/:id").put(authToken,authorizedRoles("admin"),updateProduct)
router.route("/admin/deleteProduct/:id").delete(authToken,authorizedRoles("admin"),deleteProduct)
router.route("/getProductDetail/:id").get(getProductDetail)
router.route("/review").put(authToken,productReviews)
router.route("/reviews").get(getTotalReviews).delete(authToken,deleteReview)
    

module.exports = router