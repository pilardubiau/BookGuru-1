const express = require("express");
const { Book } = require("../db/models");
const router = express.Router();

router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.status(200).json(book))
    .catch((err) => {
        res.send("book already exists!")
    });
});

module.exports = router;