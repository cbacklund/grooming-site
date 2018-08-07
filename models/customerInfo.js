const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerschema = new Schema({
    owner: { type: String, required: true },
    dogName: { type: String, required: true },
    dogGender: { type: String, required: true },
    Phone: { type: String, required: true },
    Email: String,
    Notes: String,
    date: { type: Date, default: Date.now }
  });

const Customer = mongoose.model("Customer", customerschema);

module.exports = Customer;