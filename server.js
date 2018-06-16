// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var passport = require('passport');
var session    = require('express-session')
//var env        = require('dotenv').load()

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions
require('./config/passport/passport.js')(passport, db.user);

// Static directory
// app.use(express.static("public"));
//best practice keep all assets on server page
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/API-Routes.js")(app);
require("./routes/passport-routes")(app,passport);




//Below is the test to ensure all the models are imported correctly via the server.js file
 
//Sync Database
db.sequelize.sync().then(function() {
 
    console.log('HUZZAH! Database looks fine')
 
}).catch(function(err) {

   console.log(err, "Something went wrong with the Database Update!")

});

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
 app.listen(PORT, function() {
   console.log("App listening on PORT http://localhost:" + PORT);
 });
// });