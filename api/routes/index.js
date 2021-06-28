const express = require("express");
const router = express.Router();
const users = require('./users')
const books = require('./books')
const cart = require('./cart')
const User = require('../db/models/user')

// const books = require("./books");


router.use("/users", users);
router.use("/books", books);
router.use("/cart", cart);




module.exports = router;