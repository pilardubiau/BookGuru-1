const express = require("express");
const { User } = require("../db/models");
const router = express.Router();
const checkJWT = require("../middlewares/jwt");
const jwt = require("jsonwebtoken");

router.get("/", checkJWT, function (req, res) {
  console.log(req.user);
  User.findByPk(req.user.id).then((user) => {
    res.status(200).send(user);
  })
  .catch((err) => res.status(400).send('Acces denied'))
});

module.exports = router;
