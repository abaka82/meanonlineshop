'use strict';


var errorHandler;

  errorHandler = function ($scope){
  return function error(httpResponse){
    console.log('failed: ', httpResponse);
    $scope.errors = httpResponse;
  };
};

angular.module('meanonlineshopApp')
  .controller('AdminProductController', function ($scope, User, $filter, $state, $http, toastr, Product, $stateParams, ngTableParams) {

 var orderBy = $filter('orderBy');

          $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
          };
         $scope.listProductTable = new ngTableParams({
                page: 1,
                count: 5
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

    $scope.product = {}; // create a new instance
    $scope.addProduct = function(form){
        $scope.submitted = true;    
      if (form.$valid) {
        if ( typeof $scope.product.picture === 'undefined')
        {
             // create product without image
            return Product.save($scope.product).$promise
            .then(function (product) {
                toastr.success('New product has been added successfully');
                $state.go('admin.list_product');
            }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
            });
        }
       else
       { 
            // upload and create product with image
            return Product.save($scope.product).$promise.then(function (product) {
            return Product.upload($scope.product.picture, product._id);                
            }).then(function (product) {
                toastr.success('New product has been added successfully');
                $state.go('admin.list_product');
            }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
            });
       };
     };
    };

      $scope.deleteProduct = function(productId) {
           this.$http = $http;
            this.$http.delete('/api/products/' + productId, {})
              .success(function(result) {
                  toastr.success('Product has been deleted successfully');
                  $scope.listProductTable.reload();
              }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
              });            
        }
  
      
      $scope.idSelectedVote = null;
      $scope.setSelected = function (idSelectedVote) {
         $scope.idSelectedVote = idSelectedVote;
      };

       $scope.doCheck = function () {
        if ($scope.product.Stock > 0) {
            $scope.product.Status = "Available";
            //status.value
        }
        else{
          $scope.product.Status = "Unavailable";
        }
    }

    $scope.showAll = function () {
          $scope.data = $scope.products;
    }
    $scope.showPaging = function () {
      if($scope.searchKeyword.Title == ""){
           $scope.listProductTable.reload();

    }
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



.controller('EditProductController', function ($scope, User,  $state, $http, toastr, Product, Upload, $stateParams) {
    // Use the Product $resource to fetch detail products
    $scope.id = $stateParams.id
    $scope.product = Product.get({id: $scope.id});

    $scope.editProduct = function(form){
        $scope.submitted = true; 
        if (form.$valid) {
            if ( typeof $scope.product.picture === 'undefined')
            {
                // Update product without image
                return Product.update({id: $scope.product._id}, $scope.product).$promise
                .then(function (product) {
                    toastr.success('Product has been updated successfully');
                    $state.go('admin.list_product');
                }).catch(function (err) {
                    toastr.error(err.data.message, 'There is an error');
                });
            }
        else
            { 
                // Update product with image
                return Product.update({id: $scope.product._id}, $scope.product).$promise.then(function (product) {
                return Product.upload($scope.product.picture, product._id);                
                }).then(function (product) {
                    toastr.success('Product has been updated successfully');
                    $state.go('admin.list_product');
                }).catch(function (err) {
                    toastr.error(err.data.message, 'There is an error');
                });
            };
        };
    };

    $scope.doCheck = function () {
        if ($scope.product.Stock > 0) {
            $scope.product.Status = "Available";
            //status.value
        }
        else{
          $scope.product.Status = "Unavailable";
        }
    };

  });
