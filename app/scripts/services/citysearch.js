'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('citysearch', function () {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.petfinder.com/pet.find?key=f07bd0733c5bc6925509c31d5dd84b95&location=:location&animal=:animal&size=:size&output=full&format=json', {
    callback: "JSON_CALLBACK"
}, {
      find: {
        method:'JSONP',
        params: {
          query: '98112'
        },
        isArray: false
      }
    });
  });