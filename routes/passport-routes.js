var path = require("path");

// Routes
// =============================================================
module.exports = function (app, passport) {

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/signin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
  }
  ));

  app.get("/dashboard", isLoggedIn, function (req, res) {
    console.log(req.user);
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/logout", function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });;
  });

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin'
  }
  ));


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/signin');
  }


};
