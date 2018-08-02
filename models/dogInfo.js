const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Dog = mongoose.model("Dog", dogschema);

module.exports = Dog;