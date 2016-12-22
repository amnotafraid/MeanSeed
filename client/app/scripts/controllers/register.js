'use strict';

angular.module('clientApp')
  .controller('RegisterCtrl', [
    'auth',
    '$scope',
    '$state',
    '$window',
  function (auth, $scope, $state, $window) { 

    $scope.user = {};
    
    // This is our method that will post to our server.
    $scope.registerSubmit = function () {
      
      // make sure all fields are filled out...
      if (
        !$scope.user.local.firstname ||
        !$scope.user.local.lastname ||
        !$scope.user.email ||
        !$scope.user.password ||
        !$scope.user.password2
      ) {
        $window.alert('Please fill out all form fields.');
        return false;
      }

      // make sure the passwords match match
      if ($scope.user.password !== $scope.user.password2) {
        $window.alert('Your passwords must match.');
        return false;
      }

      auth.register($scope.user) 
        .error (function(error) {
          $window.alert(error.message);
        })
        .then (function () {
          $state.go('home');
        });

    };
    
  }]);
