const { Op, literal } = require("sequelize");
const { Book } = require("../db/models");

module.exports = {
  book_create: function (req, res) {
    Book.create(req.body)
      .then((book) => res.status(200).json(book))
      .catch((err) => {
        res.send("book already exists!");
      });
  },
  book_getRandomBooks: function (req, res) {
    Book.findAll({ order: literal('random()'), limit: 54 }).then((books) => {
        res.send(books)})
  },
  book_getById: function (req, res) {
    Book.findByPk(req.params.id).then((book) => res.status(200).send(book));
  },
  book_getByTitle: function (req, res) {
    Book.findAll({
      where: { title: { [Op.iLike]: `%${req.params.title}%` } },
    }).then((books) => res.send(books));
  },
  book_getByAuthor: function (req, res) {
    Book.findAll({
      where: { author: { [Op.iLike]: `%${req.params.author}%` } },
    }).then((books) => res.send(books));
  },
  book_getByCategory: function (req, res) {
    Book.findAll({ where: { category: req.params.category } }).then((books) =>
      res.send(books)
    );
  },
};



// Book.findAll({ where: { id: { [Op.between]: [1, 10] } } }).then((books) =>
//   res.send(books)
// );