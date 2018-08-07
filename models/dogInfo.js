const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogschema = new Schema({
    breed: { type: String, required: true },
    groomType: { type: String, required: true },
    difficulty: { type: String, required: true },
    timeToGroom: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });

const Dog = mongoose.model("Dog", dogschema);

module.exports = Dog;