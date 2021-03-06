'use strict';
angular.module('meanonlineshopApp.product', ['ngFileUpload']);
angular.module('meanonlineshopApp.product')
  .factory('Product', function ($resource, $timeout, Upload, $q) {
  	upload = function(file) {
      var d = $q.defer();

      if (file && !file.$error) {
        file.upload = Upload.upload({
          url: '/upload',
          file: file
        });

        file.upload.then(function (response) {
          $timeout(function () {
            d.resolve(response.data);
          });
        }, function (response) {
          if (response.status > 0){
            d.reject(response);
          }
        });

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
