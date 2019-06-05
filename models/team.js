const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
   name: String,
   picture: String,
   // owner: {
   //   id: {
   //     type: mongoose.Schema.Types.ObjectId,
   //     ref: "User"
   //   },
   //   username: String
   // },
   players: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Player"
      }
   ],
   record: String
});

module.exports = mongoose.model("Team", teamSchema);
