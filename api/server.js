var express = require("express");
var app = express();
const axios = require('axios');
const routes = require("./routes");
const db = require("./db/index");
const PORT = process.env.PORT || 3001;
const cors = require('cors')
require('./db/models/index')
const { Book, User, Rating } = require('./db/models');
const { seedBooks, seedAdmin, seedRatings } = require('./db/seed');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes)

db.sync({ force: true }).then(() => {

  // console.log(seedBooks.length)

  const userPromise = User.bulkCreate(seedAdmin, {individualHooks: true})
  //.then(() => console.log("Admin & users created"))
  const bookPromise = Book.bulkCreate(seedBooks)
  //.then(() => console.log("Database running, seed books created"))
  
  Promise.all([userPromise, bookPromise])
  .then(() => {
    Rating.bulkCreate(seedRatings)
    .then(() => {
      console.log('Everything created')

      Book.findByPk(1)
      .then(book => book.getRatings()
      .then(ratings => {
        let myRatings = [];
        ratings.forEach(rating => myRatings.push(rating.dataValues.value));
        const result = myRatings.reduce((acum, val) => acum + val, 0)/myRatings.length;
        console.log(result);
      })
      )
    })
  })

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});