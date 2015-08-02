'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

     // Public API here
    return $resource('http://api.petfinder.com/pet.getRandom?key=f07bd0733c5bc6925509c31d5dd84b95&location=:location&animal=:animal&size=:size&output=full&format=json', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us',
          animal: null,
          size: null
        },
        isArray:false
      }
    });
  });