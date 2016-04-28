'use strict';

angular.module('meanonlineshopApp.productGrid')
  .controller('ProductGridController', function ($scope, $filter, Product){

  // Use the Product $resource to fetch all products
   $scope.products = Product.query();
   $scope.currentPage = 0;
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


  $scope.items = {
    "type": "select", 
    "name": "Page Size",
    "value": 8, 
    "values": [ 8, 10, 15, 20] 
  }; 

 $scope.pageSize = $scope.items.value;
  

})

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
})

.filter('limitCharacters',function(){
  return function(input,characterCount){
  return (input.length > characterCount) ? input.substring(0,characterCount) + ' ...' : input;
}
});
