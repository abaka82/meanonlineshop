'use strict';
class ProductGridController {

  constructor(Product) {
    // Use the Product $resource to fetch all products
    this.products = Product.query();
  }

  delete(product) {
    product.$remove();
    this.products.splice(this.products.indexOf(product), 1);
  }  
  
}

angular.module('meanonlineshopApp.productGrid')
  .controller('ProductGridController', ProductGridController);
