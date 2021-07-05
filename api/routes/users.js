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

module.exports = router;




























// router.post("/register", userController.user_register)
//   // User.create(req.body)
//   //   .then((user) => {
//   //     const token = jwt.sign(
//   //       { id: user.id, username: user.username },
//   //       "fidelio"
//   //     )
//   //     res.status(200).json({user, token})}
//   //     )
//   //   .catch((err) => {
//   //       res.send("User already exists!")
//   //   });


// router.post("/login", userController.user_login) 
// // => {
//   // const { username, password } = req.body;

//   // User.findOne({ where: { username } }).then((user) => {
//   //   if (!user)
//   //     return res.status(400).send("Username does not exists, please try again");
//   //   if (!user.validPassword(password))
//   //     return res.status(401).send("Password incorrect, please try again");

//   //   const token = jwt.sign({ id: user.id, username: user.username }, "fidelio");
//   //   return res.status(200).json({ user, token });
//   // });
// // });

// //ruta que devuelve el carrito del usuario
// router.get("/:userId/cart", checkJWT, userController.user_getCart) 
// // => {
// //   Order.findAll({ where: { userId: req.params.userId, bought: false } })
// //   .then(cartOrders => res.status(200).send(cartOrders));
// // });

// //ruta que devuelve el compras antiguas del usuario
// router.get("/:userId/checked", checkJWT, userController.user_checkoutOrder) 
// // => {
// //   Order.findAll({ where: { userId: req.params.userId, bought: true } })
// //   .then(checkedOrders => res.status(200).send(checkedOrders));
// // });