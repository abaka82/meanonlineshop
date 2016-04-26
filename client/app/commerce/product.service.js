'use strict';

(function() {

function ProductResource($resource) {
  return $resource('/api/products/:id/:controller', {
    id: '@_id'
  });
}

angular.module('meanonlineshopApp.productGrid')
  .factory('Product', ProductResource);

})();
