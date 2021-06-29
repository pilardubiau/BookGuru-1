const express = require("express");
const { User } = require("../db/models");
const { Op } = require("sequelize");
const router = express.Router();
const checkJWT = require("../middlewares/jwt");
const jwt = require('jsonwebtoken')

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        "fidelio"
      )
      res.status(200).json({user, token})}
      )
    .catch((err) => {
        res.send("User already exists!")
    });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ where: { username } }).then((user) => {
    if (!user)
      return res.status(400).send("Username does not exists, please try again");
    if (!user.validPassword(password))
      return res.status(401).send("Password incorrect, please try again");

    const token = jwt.sign({ id: user.id, username: user.username }, "fidelio");
    return res.status(200).json({ user, token });
  });
});

module.exports = router;
