/**
 * Our Schema for Users
 */
var mongoose =    require('mongoose');
var crypto =      require('crypto');
var Schema = mongoose.Schema;

// Define the User Schema
var userSchema = new Schema({
    email       : {
      type      : String,
      required  : true,
      unique    : true
    },
    local       : {
      firstname : String,
      lastname  : String,
      password  : String,
      salt      : String
    }
});

userSchema.methods.setPassword = function (password) {
  this.local.salt = crypto.randomBytes (16).toString('hex');
  this.local.password = crypto.pbkdf2Sync 
        (password,
         this.local.salt,
         1000,
         64,
         'sha1').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync 
        (password,
         this.local.salt,
         1000,
         64,
         'sha1').toString('hex');

  return this.local.password === hash;
};

// The primary user model
var User = mongoose.model('User', userSchema);

module.exports = User;