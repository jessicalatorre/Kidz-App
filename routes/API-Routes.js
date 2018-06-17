//express needed to parse html through the Apache server & to serve the file as a req
var express = require("express");

var path = require('path')
var app = express();

//new route for user session

var db = require("../models");

// GET on Session Data from MySql Using Sequelize
module.exports = function (app) {
  app.get("/api/sessions:id", function (req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
    //   var userId = 1
      db.sessions.findAll().then(function (dbSession) {
           console.log(dbSession);
          res.json(dbSession);
      });
  });

// module.exports = function(app) {
//     app.get("/api/sessions", function(req, res) {
//       // Here we add an "include" property to our options in our findAll query
//       // We set the value to an array of the models we want to include in a left outer join
//       // In this case, just db.Post
//       db.sessions.findAll({
//         // include: [db.Post]
//       }).then(function(dbSession) {
//         res.json(dbSession);
//       });
//     });

//POST method to record sessions data (clicks) 
app.post("/api/sessions", function(req, res) {
  db.sessions.create(req.body).then(function(dbsessions) {
    res.json(dbsessions);
  });
});


};



//