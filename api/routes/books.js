const express = require("express");
const { Op } = require("sequelize");
const { Book } = require("../db/models");
const router = express.Router();

router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.status(200).json(book))
    .catch((err) => {
        res.send("book already exists!")
    });
});

router.get("/home", (req, res) => {
  Book.findAll({ where: { id: { [Op.between]: [1, 5] } } })
  .then(books => res.send(books));
});

router.get("/id/:id", (req, res) => {
  Book.findByPk(req.params.id)
  .then(book => res.status(200).send(book));
})

router.get("/title/:title", (req, res) => {
  Book.findAll({ where: { title: { [Op.iLike]: `%${req.params.title}%` } }})
  .then(books => res.send(books));
});

router.get("/author/:author", (req, res) => {
  Book.findAll({ where: { author: { [Op.iLike]: `%${req.params.author}%` } }})
  .then(books => res.send(books));
});

//categorías buscadas a través de un input tipo dropdown
router.get("/category/:category", (req, res) => {
  Book.findAll({ where: { category: req.params.category }})
  .then(books => res.send(books));
});

module.exports = router;