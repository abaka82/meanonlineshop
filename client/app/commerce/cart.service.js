'use strict';

angular.module('meanonlineshopApp')
  .factory('Cart', function ($resource, $timeout, Upload, $q) {
    var resource = $resource('/api/carts/:id/:controller', null, {
      'update': { method: 'PUT'},
      'searchByUser': { method: 'GET', isArray: true,
        params: {
          controller: 'searchByUser'
        }
      },
      'searchByProduct': { method: 'GET', isArray: true,
        params: {
          controller: 'searchByProduct'
        }
      }
    });
    
    return resource;
  });
