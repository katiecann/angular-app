'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
.controller('CurrentCtrl', function ($scope, $routeParams, getPet) {
    $scope.petID = $routeParams.petID;

    $scope.currentPet = getPet.query({
        petID: $routeParams.petID
    });
});