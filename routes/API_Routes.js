
// GET on Session Data from MySql Using Sequelize
var express = require("express");

var path = require('path')
var app = express();

var db = require("../models");

module.exports = function(app) {
    app.get("/api/sessions", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.sessions.findAll({
        // include: [db.Post]
      }).then(function(dbSession) {
        res.json(dbSession);
      });
    });

//NEXT! Create method to record sessions data (clicks) - POST   dbSessions.create

};



//