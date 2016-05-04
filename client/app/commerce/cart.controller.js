'use strict';

angular.module('meanonlineshopApp')
  .controller('CartController', function ($scope, $filter, Product, Cart, Auth){

  // Use the Cart $resource to fetch all cart for user
   $scope.carts = Cart.searchByUser({id: Auth.getCurrentUser()._id});
   $scope.currentPage = 0;
   $scope.data = [];

   $scope.getQtyList = function(num) { return new Array(num); };

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
     "value": 10, 
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
