const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose");

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/fantasyfootball", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res){
  res.render("landing");
});

app.get("/league", function(req, res){
  res.render("league");
});

app.listen(port);
