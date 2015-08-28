'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.getPet
 * @description
 * # getPet
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('getPet', function ($resource) {
    // Service logic
    // ...

     // Public API here
    return $resource('http://api.petfinder.com/pet.get?key=f07bd0733c5bc6925509c31d5dd84b95&format=json&id=:petId', {}, {
          query: {
            method:'GET',
            params:{
              petId: null
            },
            isArray:false
          }
        });
  });