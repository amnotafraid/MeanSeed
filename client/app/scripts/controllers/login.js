'use strict';

angular.module('clientApp') // make sure this is set to whatever it is in your client/scripts/app.js
  .controller('LoginCtrl', [
    'auth',
    '$scope',
    '$state',
    '$window',
  function (auth, $scope, $state, $window) {

    $scope.user = {};
    
    // This is our method that will post to our server.
    $scope.logIn = function() {
      auth.logIn($scope.user).error(function(error){
        $window.alert(error.message);
      }).then(function(){
        $state.go('home');
      });

    };
    
  }]);
