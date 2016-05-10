'use strict';

angular.module('meanonlineshopApp.productGrid')
  .controller('ProductGridController', function ($rootScope, $scope, $filter, Product){

  // Use the Product $resource to fetch all products
   $scope.products = Product.query();
   $scope.currentPage = 0;
   $scope.data = [];
   $rootScope.q = {"Status": "!" + "Unavailable"};

$scope.sorts = "Select order by";
$scope.predicate = '';

$scope.order = function(predicate) {
            if (predicate === "Newest Product"){
              $scope.predicate = "CreationDate";
              $scope.reverse = true;
            }
            else if (predicate === "Oldest Product"){
              $scope.predicate = "CreationDate";
              $scope.reverse = false;
            }
            else if (predicate === "A to Z"){
              $scope.predicate = "Title";
              $scope.reverse = false;
            }
            else if (predicate === "Z to A"){
              $scope.predicate = "Title";
              $scope.reverse = true;
            }
            else if (predicate === "Highest Price"){
              $scope.predicate = "Price";
              $scope.reverse = true;
            }
            else if (predicate === "Lowest Price"){
              $scope.predicate = "Price";
              $scope.reverse = false;
            }else{
              $scope.products.reload();
            }
          };

$scope.getData = function () {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
      $scope.temp = $filter('filter')($scope.products, $scope.q);
      $scope.lastFiltered =  '';
      if (typeof $scope.searchKeyword != 'undefined')
         {
          $scope.lastFiltered = $filter('filter')($scope.temp, $scope.searchKeyword);
         } else {
             $scope.lastFiltered = $scope.temp;
        }
      return $scope.lastFiltered
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
    "value": 12, 
    "values": [ 12, 16, 20, 24, 28] 
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
