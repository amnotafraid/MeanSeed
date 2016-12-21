var db      = require('../database');
var User    = db.user;

module.exports = function (passport) {
  passport.serializeUser (function (user, done) {
    done (null, user.id);
  });

  passport.deserializeUser (function (id, done) {
    User.findById (id, function (err, user) {
      done (err, user);
    });
  });

  require('./strategies/local.js')(passport);
};  

