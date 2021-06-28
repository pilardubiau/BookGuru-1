const express = require("express");
const User = require("../db/models/user");
const router = express.Router();

router.post("/", (req, res) => {
  User.create(req.body).then((user) => res.status(200).json(user));
});

module.exports = router;
