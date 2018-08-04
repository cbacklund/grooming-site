const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const customerSeed = [
  {
    Owner: "Carl Weathers",
    dogName: "Brad",
    dogGender: "Male",
    Phone: "612-888-8888",
    Email: "charlie@gmail.com",
    Notes: "This dog is cool."  
  },
  {
    Owner: "Steve Murphy",
    dogName: "Winston",
    dogGender: "Male",
    Phone: "612-999-9999",
    Email: "steve@gmail.com",
    Notes: "This dog is a bad one."  
  },
  {
    Owner: "Judy Mathers",
    dogName: "Cupcake",
    dogGender: "Female",
    Phone: "612-777-7777",
    Email: "judydog@gmail.com",
    Notes: "This dog is a funny girl."  
  },
  {
    Owner: "Wendy Smith",
    dogName: "Gordon",
    dogGender: "Male",
    Phone: "612-444-4444",
    Email: "wendys@gmail.com",
    Notes: "This dog is a mess."  
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
