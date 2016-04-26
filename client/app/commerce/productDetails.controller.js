'use strict';

class ProductDetailsController {
  constructor(Product, $stateParams) {
     // Use the Product $resource to fetch detail products
     this.id = $stateParams.id
     this.product = Product.get({id: this.id});
  }
}

angular.module('meanonlineshopApp')
  .controller('ProductDetailsController', ProductDetailsController);
