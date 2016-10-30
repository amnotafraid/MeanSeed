'use strict';

angular.module('clientApp') // make sure this is set to whatever it is in your client/scripts/app.js
  .controller('SignupCtrl', [
    '$http',
    '$scope',
  function ($http, $scope) { // note the added $http depedency

    $scope.user = {};
    
    // This is our method that will post to our server.
    $scope.signupSubmit = function () {
      console.log('signupSubmit');
      console.log('user = ' + JSON.stringify($scope.user, null, 2));
      
      // make sure all fields are filled out...
      // aren't you glad you're not typing out
      // $scope.signup.user.firstname everytime now??
      if (
        !$scope.user.firstname ||
        !$scope.user.lastname ||
        !$scope.user.email ||
        !$scope.user.password1 ||
        !$scope.user.password2
      ) {
//        alert('Please fill out all form fields.');
        return false;
      }

      // make sure the passwords match match
      if ($scope.user.password1 !== $scope.user.password2) {
//        alert('Your passwords must match.');
        return false;
      }

      // Just so we can confirm that the bindings are working
      console.log($scope.user);

      // Make the request to the server ... which doesn't exist just yet
      var request = $http.post('/signup', $scope.user);

      // we'll come back to here and fill in more when ready
      request.success(function (data) {
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });

    };
    
  }]);
