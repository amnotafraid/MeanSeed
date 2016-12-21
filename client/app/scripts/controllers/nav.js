'use strict';

angular.module('clientApp')
  .controller ('NavCtrl', [
		'auth',
    '$scope',
    function (auth, $scope) {
      $scope.user = { 
        firstName: 'Bugs',
        lastName: 'Bunny'
      };  

      $scope.isLoggedIn = auth.isLoggedIn;

      $scope.currentUser = auth.currentUser;

      $scope.logOut = function () {
        auth.logOut();
      };
    }
  ]);

