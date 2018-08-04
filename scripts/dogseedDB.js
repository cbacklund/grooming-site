const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const dogSeed = [
  {
    breed: "Golden Retriever",
    groomType: "Bath/Trim",
    difficulty: 2,
    timeToGroom: 120, 
  },
  {
    breed: "Beagle",
    groomType: "Bath/Deshed",
    difficulty: 1,
    timeToGroom: 60, 
  },
  {
    breed: "Havanese",
    groomType: "Clipper",
    difficulty: 3,
    timeToGroom: 120, 
  },
  {
    breed: "Goldendoodle",
    groomType: "Clipper/Scissor",
    difficulty: 5,
    timeToGroom: 150, 
  },
  {
    breed: "Bernese Mountain Dog",
    groomType: "Bath/Trim",
    difficulty: 3,
    timeToGroom: 150, 
  },
  {
    breed: "Pug",
    groomType: "Bath/Deshed",
    difficulty: 1,
    timeToGroom: 60, 
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(dogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
