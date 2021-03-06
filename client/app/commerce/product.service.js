/*'use strict';

(function() {

function ProductResource($resource) {
  return $resource('/api/products/:id/:controller', {
    id: '@_id'
  });
}

angular.module('meanonlineshopApp.productGrid')
  .factory('Product', ProductResource);

})();*/


'use strict';

angular.module('meanonlineshopApp')
  .factory('Product', function ($resource, $timeout, Upload, $q) {
    var resource = $resource('/api/products/:id/:controller', null, {
      'update': { method: 'PUT'},
      'catalog':{ method: 'GET', isArray: true,
        params: {
          controller: 'catalog'
        }
      },
      'search': { method: 'GET', isArray: true,
        params: {
          controller: 'search'
        }
      }
    });

    resource.upload = function(file, productId) {
      var d = $q.defer();

      if (file && !file.$error) {
        console.log("upload 1");
        file.upload = Upload.upload({
          url: '/api/products/'+productId+'/upload',
          file: file,
          method: 'POST',
          headers: {'Content-Type': 'multipart/form-data'}
        });
         console.log("upload 2" + productId);
        file.upload.then(function (response) {
          $timeout(function () {
            d.resolve(response.data);
          });
        }, function (response) {
          if (response.status > 0){
            d.reject(response);
          }
        });
       console.log("upload 3"); 
        file.upload.progress(function (evt) {
          d.notify({progress: Math.min(100, parseInt(100.0 * evt.loaded / evt.total))}, evt);
        });
      } else {
        d.reject(file ? file.$error : 'No picture file');
      }
      return d.promise;
    };

    return resource;
  });

