const express = require('express')
const { registerUser, loginUser,logoutUser, forgotPassword, resetPassword, getUserDetail, updatePassword } = require('../controllers/UserController')
const router = express.Router()
const {authToken} = require('../Middelware/userAuthentication')


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(authToken,getUserDetail)
router.route("/updatePassword").put(authToken,updatePassword)

router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logoutUser)


module.exports = router