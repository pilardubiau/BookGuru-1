const express = require("express");
const { Op } = require("sequelize");
const { Book } = require("../db/models");
const router = express.Router();

//creamos un libro
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.status(200).json(book))
    .catch((err) => {
      res.send("book already exists!");
    });
});

//buscamos 10 libros para presentar en el home
router.get("/home", (req, res) => {
  Book.findAll({ where: { id: { [Op.between]: [1, 10] } } }).then((books) =>
    res.send(books)
  );
});

//busca un libro por id
router.get("/id/:id", (req, res) => {
  Book.findByPk(req.params.id).then((book) => res.status(200).send(book));
});

//buscamos un libro por su titulo
router.get("/title/:title", (req, res) => {
  Book.findAll({
    where: { title: { [Op.iLike]: `%${req.params.title}%` } },
  }).then((books) => res.send(books));
});

//Buscamos un autor por similitud
router.get("/author/:author", (req, res) => {
  Book.findAll({
    where: { author: { [Op.iLike]: `%${req.params.author}%` } },
  }).then((books) => res.send(books));
});

//categorías buscadas a través de un input tipo dropdown
router.get("/category/:category", (req, res) => {
  Book.findAll({ where: { category: req.params.category } }).then((books) =>
    res.send(books)
  );
});

module.exports = router;
