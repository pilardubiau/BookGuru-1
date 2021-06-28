const express = require("express");
const User = require("../db/models/user");
const { Op } = require("sequelize");
const router = express.Router();

router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => {
        res.send("User already exists!")
    });
});

// router.post("/", (req, res, next) => {
//     const { username, email } = req.body;

//     User.findOrCreate({
//       where: { [Op.or]: [{ username }, { email }] },
//       defaults: req.body,
//     })
//       .then((user) => {
//         const token = jwt.sign(
//           { id: user.id, username: user.username },
//           "fidelio"
//         );
//         user[1]
//           ? res.status(201).json({ user: user[0] }) //mandar token
//           : res.status(400).send("User Already Exists!");
//       })
//       .catch(next);
//   });

module.exports = router;
