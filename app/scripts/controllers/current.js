'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
.controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.petID = $routeParams.petID;

    $scope.currentPet = current.query({
        petID: $routeParams.petID
});

$scope.savePet = function(pet){
    var petData = {
        'name': pet.name,
        'id': pet.id
    };
    if (!$localStorage.savedPets){
        $localStorage.savedPets = [petData];
    } else {
        // We have already saved some Pets. 
        // Check to make sure we haven't already saved the current pet.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the pet.
        for (var i=0; i < $localStorage.savedPets.length; i++){
            if ($localStorage.savedPets[i].id === petData.id) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedPets.push(petData);
        } else {
            console.log('pet already saved');
       }
            }
        };
  });