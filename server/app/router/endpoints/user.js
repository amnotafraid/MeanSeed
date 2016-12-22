var passport		= require('passport');
var db          = require('../../database');
var User				= db.user;

exports.login = function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json ({
      message: 'Please fill out email and password'
    });
  }

  passport.authenticate('local-login', function(err, user, info) {
    if (err) return next(err); 

    if (user) {
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
};

exports.register = function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields'
    });
  }

	// Check to see if the user already exists
	// using their email address
	User.findOne({
		'email': req.body.email
	}, function (err, user) {

		// If there's an error, log it and return to user
		if (err) return next(err);

		// If the user doesn't exist, create one
		if (!user) {
			// setup the new user
			var newUser = new User({
				email: req.body.email,
        local: {
          firstname: req.body.local.firstname,
          lastname: req.body.local.lastname
        }
			});

      newUser.setPassword(req.body.password);
 
			// save the user to the database
			newUser.save(function (err, savedUser, numberAffected) {
				if (err) return next(err);

        var returnObj = {};

        returnObj.token = savedUser.generateJWT();

				res.status(200).json({token: savedUser.generateJWT()});
			});
		}

		// If the user already exists...
		if (user) {
			res.status(409).json({
					'message': req.body.email + ' already exists!'
			});
		}
	});
};
