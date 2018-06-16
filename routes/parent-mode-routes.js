var express = require("express");

var path = require('path')
var app = express();

var db = require("../models");

// GET on Session Data from MySql Using Sequelize
module.exports = function (app) {
    app.get("/api/sessions", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        //   var userId = req.user.userId;
        var userId = 1
        db.sessions.findAll({
            where: {
                id:req.params.id
            },
            include: [db.session]
        }).then(function (dbSession) {
            res.json(dbSession);
        });
    });
};