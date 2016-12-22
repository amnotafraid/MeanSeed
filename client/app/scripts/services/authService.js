'use strict';

function Auth($http, $state, $window) {
  var _this = this;

  this.currentUser = function () {
    if (_this.isLoggedIn ()) {
      var token = _this.getToken ();
      var payload = JSON.parse ($window.atob (token.split('.')[1]));

      return payload.firstname + ' ' + payload.lastname;
    }
  };

  this.getToken = function () {
    return $window.localStorage['mean-token'];
  };

  this.isLoggedIn = function () {
    var token = _this.getToken();
    if (token) {
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.exp > Date.now() / 1000;
    }
    else {
      return false;
    }
  };

	this.logIn = function(user){
		return $http.post('/login', user)
			.success(function(data){
				_this.saveToken(data.token);
			});  
	};

  this.logOut = function () {
    $window.localStorage.removeItem('mean-token');
    $state.go('home');
  };

  this.register = function (user) {
    return $http.post ('/register', user)
      .success (function (data) {
        _this.saveToken (data.token);
      })
      .error (function (data, status) {
        _this.error = data.message;
      });
  };

  this.saveToken = function (token) {
    $window.localStorage['mean-token'] = token;
  };
}

angular.module('clientApp')
  .factory('auth', [
    '$http',
    '$state',
    '$window',
    function ($http, $state, $window) {
      return new Auth($http, $state, $window);
    }
  ]);
