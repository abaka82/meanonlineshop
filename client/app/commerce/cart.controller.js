'use strict';

angular.module('meanonlineshopApp')
  .controller('CartController', function ($scope, $state, $filter, Product, Cart, Auth, toastr){

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
   
   
   $scope.deleteFromCart = function(id) {
      Cart.delete({id: id}, function success(/* value, responseHeaders */) {
        $state.reload();
        toastr.success('One cart item has been deleted');
      }, errorHandler($scope));
   };


  $scope.updateFromCart = function(id) {
      Cart.update({id: id}, $scope.carts[this.$index], function success(/* value, responseHeaders */) {
        $state.reload();
        toastr.success('One cart item has been updated');
      }, errorHandler($scope));
   };
})

.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
})

.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<=max; i++)
      input.push(i);
    return input;
  };
});
