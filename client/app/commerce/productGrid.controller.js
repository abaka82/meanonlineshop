'use strict';

angular.module('meanonlineshopApp.productGrid')
  .controller('ProductGridController', function ($rootScope, $scope, $filter, Product){

  // Use the Product $resource to fetch all products
   $scope.products = Product.query();
   $scope.currentPage = 0;
   $scope.data = [];
   $rootScope.q = '';


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


  $scope.items = {
    "type": "select", 
    "name": "Page Size",
    "value": 8, 
    "values": [ 8, 10, 15, 20] 
  }; 

 $scope.pageSize = $scope.items.value;
  
  $scope.hoverIn = function(){
        this.hoverTitle = true;
    };

    $scope.hoverOut = function(){
        this.hoverTitle = false;
    };

})

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
