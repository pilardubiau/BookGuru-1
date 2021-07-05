const { Order, User, Book } = require("../db/models");

module.exports = {
  user_validation: function (req, res) {
    User.findByPk(req.user.id)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => res.status(400).send("Please Login or Register"));
  },
  order_creation: function (req, res) {
    Order.create(req.body)
      .then((order) => res.send(order))
      .catch((err) => res.status(400).send("Couldn't create order"));
  },

  order_checkout: function (req, res) {
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
  },
  
  order_updateQuantity: function (req, res) {
    Order.update(
      {
        quantity: req.body.quantity,
      },
      { where: { id: req.body.orderId, bought: false }, returning: true }
    )
      .then((updatedOrders) => res.status(200).send(updatedOrders))
      .catch((err) => res.status(400).send("Couldn't update order"));
  },
  order_delete: function (req, res) {
    Order.destroy({ where: { id: req.body.orderId } }).then(() =>
      res.status(202).send("Order deleted")
    );
  },
};
