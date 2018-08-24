const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingschema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dogName: {type: String, required: true },
    service: {type: String, required: true }, 
    date: { type: Date, default: Date.now }
  });

const Booking = mongoose.model("Booking", bookingschema);

module.exports = Booking;