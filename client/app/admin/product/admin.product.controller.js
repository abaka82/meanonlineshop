'use strict';


var errorHandler;

  errorHandler = function ($scope){
  return function error(httpResponse){
    console.log('failed: ', httpResponse);
    $scope.errors = httpResponse;
  };
};

angular.module('meanonlineshopApp')
  .controller('AdminProductController', function ($scope, Upload, User, $filter, $state, $http, toastr, Product, $stateParams, ngTableParams) {
$scope.expanded = false;
$scope.currentPage = 0;
//$scope.product.picture = {};
 var orderBy = $filter('orderBy');

 $scope.categories = [
    { value: "Kids", name: "Kids" },
    { value: "Fiction", name: "Fiction" }
];

/* $scope.$watch('files', function (files) {
    $scope.formUpload = false;
    if (files != null) {
      if (!angular.isArray(files)) {
        $timeout(function () {
          $scope.files = files = [files];
        });
        return;
      }
      for (var i = 0; i < files.length; i++) {
        Upload.imageDimensions(files[i]).then(function (d) {
          $scope.d = d;
        });
        $scope.errorMsg = null;
        (function (f) {
          $scope.upload(f, true);
        })(files[i]);
      }
    }
  });*/

$scope.searchKeyword = { Title: '', Author: '', Category:'', Stock:'' };

          $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
          };
         $scope.listProductTable = new ngTableParams({
                page: 1,
                count: 5,
                filter: $scope.searchKeyword
            }, {
                total: 0, // length of data
                getData: function ($defer, params) {
                    // Use the User $resource to fetch all users
                    Product.query({}, function(response) {
                      $scope.products = response;
                      //$scope.data = $scope.products.slice((params.page() - 1) * params.count(), params.page() * params.count());
                      if (params.filter().Title || params.filter().Author || params.filter().Category || params.filter().Stock  ) {
                        $scope.data =  $filter('filter')($scope.products, params.filter());
                        params.total($scope.data.length); 
                      } else {
                         $scope.data =  $scope.products.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        params.total($scope.products.length); 
                      }
                      console.log(params.filter().Title);
                    // set total for recalc pagination
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

      $scope.deleteProduct = function(productId, stock) {
           this.$http = $http;
           if (stock < 1 ){

             this.$http.delete('/api/products/' + productId, {})
              .success(function(result) {
                  toastr.success('Product has been deleted successfully');
                  $scope.listProductTable.reload();
              }).catch(function (err) {
                toastr.error(err.data.message, 'There is an error');
              });          
            } else {
              toastr.warning('You can only delete product which has been out of stock');
            }
        }
  
      $scope.cancelNewProduct = function() {
           $state.go('admin.list_product');
        };

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
    };

   $scope.collapseExpand = function(predicate) {
            $scope.expanded = predicate == false ? true : false;
          };

          $scope.liatModel = function() {
            console.log($scope.product.picture);
          };
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

    $scope.categories = [
    { value: "Kids", name: "Kids" },
    { value: "Fiction", name: "Fiction" }
    ];

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
