'use strict';

(function() {

class EcommerceController{
 newProduct = {};
  
  constructor($http, $scope, $state) {
    this.$http = $http;
    this.$state = $state;
    this.$scope = $scope;
  }



  addProduct(form) {
       /*var formData = new FormData();
                    formData.append('image', this.image);
                    console.log(this.image);
                    this.$http.post('/upload', formData, {
                        headers: { 'Content-Type': false },
                        transformRequest: angular.identity
                    }).success(function(result) {
                        $scope.uploadedImgSrc = result.src;
                        $scope.sizeInBytes = result.size;
                    });*/

   // this.$http.post('/upload', {});
   // if (this.newProduct) {
    //console.log(imageupload);
        this.$http.post('/api/products', 
        {
        Title: this.newProduct.title,
        Author: this.newProduct.author,
        Description: this.newProduct.description,
        Category: this.newProduct.category,
        Image: this.newProduct.image,
        Price: this.newProduct.price,
        Stock: this.newProduct.stock,
        Status: this.newProduct.status
        }).success(function(result) {
            console.log(result);
        });
      this.newProduct = {};
   // }
  }

 // deleteThing(thing) {
 //   this.$http.delete('/api/product/' + product._id);
 // }

 /**
 * modalDemoCtrl - Controller used to run modal view
 * used in Basic form view
 */
 
 DialogDemoCtrl($scope, $timeout, $dialog){
    $timeout(function(){
      $dialog.dialog({}).open('views/common/modal_example.html');  
    }, 3000);  
   }

  uploadHander($scope, Upload, $timeout) {
    return function(file) {
      if (file && !file.$error) {
        $scope.file = file;
        file.upload = Upload.upload({
          url: '/api/products/'+$scope.product._id+'/upload',
          file: file
        });

        file.upload.then(function (response) {
          $timeout(function () {
            file.result = response.data;
          });
        }, function (response) {
          if (response.status > 0){
            console.log(response.status + ': ' + response.data);
            errorHandler($scope)(response.status + ': ' + response.data);
          }
        });

        file.upload.progress(function (evt) {
          file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
      }
    };
  }
}

angular.module('meanonlineshopApp')
  .controller('EcommerceController', EcommerceController);

})();

/*angular.module('meanonlineshopApp')
.controller('EcommerceController', function ($scope, $state, Product) {
     single = function(image) {
                        var formData = new FormData();
                        formData.append('image', image, image.file.name);

                        this.$http.post('/upload', formData, {
                            headers: { 'Content-Type':  'application/json' },
                            transformRequest: angular.identity
                        }).success(function(data) {
                            //this.$scope.uploadedImgSrc = result.src;
                            //this.$scope.sizeInBytes = result.size;
                             var parsedJson = JSON.parse(data) ;
                              console.log(parsedJson.name);
                        })
                          .error(function(data)
                         {
                          console.log(data);
                         })
                        ;
                        Product.upload(image)
      };
  });*/