const express = require("express");
const { Op } = require("sequelize");
const { Book } = require("../db/models");
const bookController = require("../controllers/bookController");
const checkJWT = require("../middlewares/jwt");
const router = express.Router();

//Creamos un libro
router.post("/", bookController.book_create);

//Devolvemos 10 libros random
router.get("/home", bookController.book_getRandomBooks);

//Devolvemos un book por PK
router.get("/id/:id", bookController.book_getById);

//devolvemos todos los libros que matcheen con un título
router.get("/title/:title", bookController.book_getByTitle);

//devolvemos todos los libros de un auto
router.get("/author/:author", bookController.book_getByAuthor);

//Devolvemos los libros relacionados con una categoría
router.get("/category/:category", bookController.book_getByCategory);

//Borramos un libro por PK
router.delete("/id/:id", checkJWT, bookController.book_delete);

//Borramos un usuario por PK
router.put("/id/:id", checkJWT, bookController.book_update);

module.exports = router;
