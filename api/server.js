var express = require("express");
var app = express();
const axios = require('axios');
const routes = require("./routes");
const db = require("./db/index");
const PORT = process.env.PORT || 3001;
const cors = require('cors')
require('./db/models/index')
const { Book } = require('./db/models');
const seedBooks = require('./db/seed');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes)

db.sync({ force: true }).then(() => {

  // console.log(seedBooks.length)

  Book.bulkCreate(seedBooks)
  .then(() => console.log("Database running, seed books created"));

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});