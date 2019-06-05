var mongoose = require("mongoose");

var playerSchema = new mongoose.Schema({
  name: String,
  pictureUrl: String,
  position: String

});

module.exports = mongoose.model("Player", playerSchema);
