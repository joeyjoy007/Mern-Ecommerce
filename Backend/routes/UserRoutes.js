const express = require('express')
const { registerUser, loginUser,logoutUser, forgotPassword, resetPassword, getUserDetail, updatePassword, getAllUser,updateProfile, updateRole, deleteRole } = require('../controllers/UserController')
const router = express.Router()
const {authToken, authorizedRoles} = require('../Middelware/userAuthentication')


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(authToken,getUserDetail)
router.route("/updatePassword").put(authToken,updatePassword)
router.route("/updateProfile").put(authToken,updateProfile)
router.route("/admin/getAllUser").get(authToken,authorizedRoles('admin'),getAllUser)
router.route("/admin/getUserDetail/:id").get(authToken,authorizedRoles('admin'),getUserDetail)
router.route("/admin/updateRole/:id").put(authToken,authorizedRoles('admin'),updateRole)
router.route("/admin/deleteRole/:id").delete(authToken,authorizedRoles('admin'),deleteRole)



router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logoutUser)


module.exports = router