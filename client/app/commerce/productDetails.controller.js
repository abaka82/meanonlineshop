'use strict';

angular.module('meanonlineshopApp')
  .controller('ProductDetailsController', function ($scope, Product, Cart, Auth, $stateParams, $state, toastr) {

     // Use the Product $resource to fetch detail products
     $scope.product = Product.get({id: $stateParams.id});
     
     $scope.cart = {};
     $scope.products = {}; 

     $scope.getQtyList = function(num) { return new Array(num); }; 
   
     $scope.addToCart = function(form){
        if ((typeof $scope.cart.Qty === 'undefined') || ($scope.cart.Qty === ''))
        {
          toastr.error('Please select cart Qty first');
        }
        else
        {
            $scope.cart.Product =  $scope.product._id;
            $scope.cart.User = Auth.getCurrentUser()._id;      
   
            Cart.searchByProduct({id: $scope.product._id}).$promise.then(function (cart) {
              
              if (cart.length >= 1)
              {              
                $scope.cart.Qty = cart[0].Qty + parseInt($scope.cart.Qty);
                
                if ($scope.cart.Qty > cart[0].Product.Stock)
                {
                  toastr.error('Total Cart qty ('+ $scope.cart.Qty +') is greater than stock qty ('+ cart[0].Product.Stock +')');
                  $scope.cart.Qty = cart[0].Qty;
                }
                else
                {
                  return Cart.update({id: cart[0]._id}, $scope.cart).$promise
                  .then(function (cart) {
                    toastr.success('Cart has been updated successfully');
                    $state.reload();
                  }).catch(function (err) {
                    toastr.error('There is an error: ' + err.data.message);  
                  });
                }            
              }
              else
              {
                  return Cart.save($scope.cart).$promise
                  .then(function (cart) {
                    toastr.success('New cart has been added successfully');
                    $state.reload();
                  }).catch(function (err) {
                    toastr.error('There is an error: ' + err.data.message);  
                  });
              };   
            });
      }
   };

  });
  
