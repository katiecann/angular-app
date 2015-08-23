'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
 .controller('MainCtrl', function ($scope, current, $localStorage) {
    $scope.current = current.query();
    $scope.storage = $localStorage;

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location,
            animal: $scope.animal,
            size: $scope.size
        });
    };
  });