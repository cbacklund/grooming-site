const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Customer = mongoose.model("Customer", customerschema);

module.exports = Customer;