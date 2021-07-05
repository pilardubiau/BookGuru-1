const express = require("express");
const router = express.Router();
const checkJWT = require("../middlewares/jwt");
const userController = require('../controllers/userController')

//Creamos un usuario
router.post("/register", userController.user_register)

//Logueamos un usuario
router.post("/login", userController.user_login)

//Se devuelven todas la ordenes que con bought: false
router.get("/:userId/cart", checkJWT, userController.user_getCart)

//Se checkean las ordenes en false a true
router.get("/:userId/checked", checkJWT, userController.user_checkoutOrder) 

router.get("/", checkJWT, userController.user_getAllUsers) 

router.delete("/", checkJWT, userController.user_delete)

router.put("/profile/:id", checkJWT, userController.user_changeAdminProperty)

module.exports = router;