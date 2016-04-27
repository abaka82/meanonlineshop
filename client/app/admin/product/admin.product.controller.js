'use strict';

angular.module('meanonlineshopApp')
  .controller('AdminProductController', function ($scope, User, $state, $http, toastr, Product, $stateParams, ngTableParams) {

 $scope.newProduct = {};
 //$scope.products = Product.query();

         $scope.listProductTable = new ngTableParams({
                page: 1,
                count: 3
            }, {
                total: 0, // length of data
                getData: function ($defer, params) {
                    // Use the User $resource to fetch all users
                    Product.query({}, function(response) {
                      $scope.products = response;
                      $scope.data = $scope.products.slice((params.page() - 1) * params.count(), params.page() * params.count());
                      params.total($scope.products.length); // set total for recalc pagination
                      $defer.resolve($scope.data);
                    });
                }
            });

         $scope.addProduct = function(form) {
           $scope.submitted = true;    
            this.$http = $http;
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
           if (form.$valid) {
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
                  $scope.newProduct = {};
                  toastr.success('New product has been added successfully');
                  $state.go('admin.list_product');
              }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
              });
            }
        }


      $scope.deleteProduct = function(productId) {
           this.$http = $http;
            this.$http.delete('/api/products/' + productId, {})
              .success(function(result) {
                  toastr.success('Product has been deleted successfully');
                  $state.reload();
              }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
              });
            
        }
  
      
  })

.directive('ngConfirmClick', [
      function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure to delete this product??";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
}])

.controller('EditProductController', function ($scope, User,  $state, $http, toastr, Product, $stateParams) {
       // Use the Product $resource to fetch detail products
       $scope.id = $stateParams.id
       $scope.product = Product.get({id: $scope.id});

       $scope.editProduct = function(form) {
         $scope.submitted = true;    
         this.$http = $http;
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
          if (form.$valid) {
            this.$http.put('/api/products/' + $scope.id, 
              {
              Title: this.product.Title,
              Author: this.product.Author,
              Description: this.product.Description,
              Category: this.product.Category,
              Image: this.product.Image,
              Price: this.product.Price,
              Stock: this.product.Stock,
              Status: this.product.Status
              }).success(function(result) {
                  console.log(result);
                  toastr.success('Product has been updated successfully');
                   $state.go('admin.list_product');
              }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
                $state.go('admin.list_product');
              });
          }
        }

  });

