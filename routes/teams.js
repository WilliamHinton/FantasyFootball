const express = require('express'),
      router = express.Router();
      Team = require("../models/team");

//INDEX route
router.get("/", function(req, res){
  Team.find({}, function(err, teams){
    if(err){
      console.log(err);
    } else{
      res.render("teams/index", {teams:teams});
    }
  });
});

module.exports = router;
