/**
 * The index of Routes
 */
var user        = require('./endpoints/user');

module.exports = function (
    app
    ) {

  app.route('/register')
    .post(user.register);

  app.route('/login')
    .post(user.login);
};
