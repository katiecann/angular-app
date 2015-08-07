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
    return $resource('http://api.petfinder.com/pet.find?key=f07bd0733c5bc6925509c31d5dd84b95&location=:location&animal=:animal&size=:size&output=full&format=json', {
    callback: "JSON_CALLBACK"
}, {
      query: {
        method:'JSONP',
        params:{
          location: '98112',
          animal: null,
          size: null
        },
        isArray:false
      }
    });
  });