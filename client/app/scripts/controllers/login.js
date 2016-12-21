'use strict';

angular.module('clientApp') // make sure this is set to whatever it is in your client/scripts/app.js
  .controller('LoginCtrl', [
    'auth',
    '$scope',
    '$window',
  function (auth, $scope, $window) {

    $scope.user = { 
      firstName: 'Bugs',
      lastName: 'Bunny'
    };  
    
    // This is our method that will post to our server.
    $scope.loginSubmit = function () {
      auth.logIn($scope.user);
    };
    
  }]);
