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

    $scope.savePet = function(pet){
        var petData = {
            'name': pet.petfinder.pet.name.$t,
            'id': pet.petfinder.pet.id.$t
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
                // Add object to trigger messages
                $scope.petSaved = {
                    'success': true
                };
            } else {
                console.log('pet already saved');
                // Add object to trigger messages
                $scope.petSaved = {
                    'duplicate': true
                };
            }
        }
    };
  });