const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: String,
    breed: { type: String, required: true },
    message: String,
    date: { type: Date, default: Date.now }
  });

const ContactUs = mongoose.model("ContactUs", contactusSchema);

module.exports = ContactUs;