const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grooming");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
