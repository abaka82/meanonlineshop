'use strict';

angular.module('meanonlineshopApp.productGrid')
  .controller('ProductGridController', function ($scope, $filter, Product){

  // Use the Product $resource to fetch all products
   $scope.products = Product.query();
   $scope.currentPage = 0;
   $scope.pageSize = 8;
   $scope.data = [];
   $scope.q = '';

$scope.getData = function () {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
      return $filter('filter')($scope.products, $scope.q)
}

   $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
    


  $scope.delete = function(product) {
    product.$remove();
    this.products.splice(this.products.indexOf(product), 1);
  }  
  
})

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
