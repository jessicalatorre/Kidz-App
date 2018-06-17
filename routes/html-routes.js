var express = require("express");

var path = require('path')
var app = express();

//viewed at localhost: 8080
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  })

  app.get("/game", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/game.html"));
  })

  app.get("/parent-view", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/parent-view.html"));
  })
};

