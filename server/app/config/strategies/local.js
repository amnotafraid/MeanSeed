var LocalStrategy = require('passport-local').Strategy;
var db =            require('../../database');
var User =          db.user;

module.exports = function(passport) {
  passport.use('local-login', new LocalStrategy({
		// by default, local strategy uses username and password.
		// Here, we override these field names
		usernameField : 'email',
		passwordField : 'password'
		},
    function(email, password, done) {
			process.nextTick(function () {
				User.findOne({ email: email}, function (err, user) {
					if (err) {
            return done(err); 
          }
          
					if (!user) {
						return done(null, false, { message: 'Incorrect email.' });
					}

					var fMatch = user.validPassword(password);
          
          if (!fMatch) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          else {
            return done(null, user);
          }
				});
			});
    })
  );
};


