'use strict';

angular.module('clientApp')
  .directive('topNav', function () {
    return {
      templateUrl: '/views/top-nav.html' ,
      restrict: 'E',
      controller: 'NavCtrl'
    };  
  });
