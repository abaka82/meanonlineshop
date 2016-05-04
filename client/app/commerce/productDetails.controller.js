'use strict';

class ProductDetailsController {
  constructor(Product, Cart, Auth, $stateParams) {
     // Use the Product $resource to fetch detail products
     this.id = $stateParams.id
     this.product = Product.get({id: this.id});
     
     this.cart = {};
     this.Cart = Cart;
     this.Auth = Auth;
     this.products = {};
  }

   getQtyList(num)
   { 
     return new Array(num);
   };     
   
    addToCart(form) {
      this.submitted = true;

      if (form.$valid) {
           this.cart.Product = this.product._id;
           this.cart.User = this.Auth.getCurrentUser()._id;      
            
            this.products = this.Cart.searchByProduct({id: this.product._id});              
            console.log(this.products);
            console.log('length: ', this.products.length);
     
            return this.Cart.save(this.cart).$promise
            .then(function (cart) {
              console.log('New cart has been added successfully');
              //  $state.go('admin.list_product');
            }).catch(function (err) {
              console.log('There is an error: ' + err.data.message);

            });
      }
   };
}

angular.module('meanonlineshopApp')
  .controller('ProductDetailsController', ProductDetailsController);
