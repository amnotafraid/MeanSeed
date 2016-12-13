'use strict';

function Auth() {
  var _this = this;

	this.fLoggedIn = false;
	this.user = {};

	this.currentUser = function () {
		if (_this.isLoggedIn ()) {
			return _this.user.firstName + ' ' + _this.user.lastName;
		}
	};

	this.isLoggedIn = function () {
		return _this.fLoggedIn;
	};

	this.logIn = function(user){
		_this.user = user;
		_this.fLoggedIn = true;
	};

	this.logOut = function () {
		delete _this.user;
		_this.fLoggedIn = false;
	};
}

angular.module('clientApp')
  .factory('auth', [
    function () {
      return new Auth();
    }
  ]);
