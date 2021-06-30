const express = require("express");
const { User, Book } = require("../db/models");
const { Order } = require("../db/models");
const router = express.Router();
const checkJWT = require("../middlewares/jwt");
const jwt = require("jsonwebtoken");

router.get("/", checkJWT, function (req, res) {
  console.log(req.user);
  User.findByPk(req.user.id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(400).send("Please Login or Register"));
});

//ruta llamada al agregar una order al carrito
//.../api/orders/
//req.body tiene que traer ID del usuario, ID del libro, y cantidad de libros.
router.post("/", checkJWT, (req, res) => {
  Order.create(req.body)
    .then((order) => res.send(order))
    .catch((err) => res.status(400).send("Couldn't create order"));
});

//ruta llamada al comprar
//req.body debe traer el userId
router.put("/checkout", checkJWT, (req, res) => {
  req.body.orders.forEach((order, index) => {
    Book.findByPk(order.bookId).then((singleBook) =>
      singleBook.reduceStock(order.quantity)
    );
  });
  const dateObj = new Date().toDateString().split(" ").splice(1).join(" ");
  Order.update(
    {
      bought: true,
      date: dateObj,
    },
    { where: { userId: req.body.userId, bought: false }, returning: true }
  )
    .then((updatedOrders) => res.status(200).send(updatedOrders))
    .catch((err) => res.status(400).send("Couldn't make the checkout"));
});

//ruta llamada al actualizar cantidad
//req.body debe traer cantidad y orderId,
router.put("/quantity", checkJWT, (req, res) => {
  Order.update(
    {
      quantity: req.body.quantity,
    },
    { where: { id: req.body.orderId, bought: false }, returning: true }
  ).then((updatedOrders) => res.status(200).send(updatedOrders))
  .catch((err) => res.status(400).send("Couldn't update order"))
});

//ruta que elimina una orden del carrito
//req.body debe traer una orderId
router.delete("/", (req, res) => {
  Order.destroy({ where: { id: req.body.orderId } }).then(() =>
    res.status(202).send("Order deleted")
  );
});

module.exports = router;
