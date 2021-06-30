const { User, Order } = require("../db/models");
const jwt = require("jsonwebtoken");

module.exports = {
  user_register: function (req, res) {
    User.create(req.body)
      .then((user) => {
        const token = jwt.sign(
          { id: user.id, username: user.username },
          "fidelio"
        );
        res.status(200).json({ user, token });
      })
      .catch((err) => {
        res.send("User already exists!");
      });
  },
  user_login: function (req, res, next) {
    const { username, password } = req.body;

    User.findOne({ where: { username } }).then((user) => {
      if (!user)
        return res
          .status(400)
          .send("Username does not exists, please try again");
      if (!user.validPassword(password))
        return res.status(401).send("Password incorrect, please try again");

      const token = jwt.sign(
        { id: user.id, username: user.username },
        "fidelio"
      );
      return res.status(200).json({ user, token });
    });
  },
  user_getCart: function(req, res) {
    Order.findAll({ where: { userId: req.params.userId, bought: false } })
    .then(cartOrders => res.status(200).send(cartOrders));
  },
  user_checkoutOrder: function(req, res) {
    Order.findAll({ where: { userId: req.params.userId, bought: true } })
    .then(checkedOrders => res.status(200).send(checkedOrders));
  }
};
