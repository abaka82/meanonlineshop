'use strict';

(function() {

class EcommerceController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeProducts = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
  }

  $onInit() {
    this.$http.get('/api/products').then(response => {
      this.awesomeProducts = response.data;
      this.socket.syncUpdates('product', this.awesomeProducts);
    });
  }

  addProduct() {
    if (this.newProduct) {
      this.$http.post('/api/product', { Id: guid(), Title: this.newProduct });
      this.newProduct = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/product/' + product._id);
  }
}

angular.module('meanonlineshopApp')
  .component('productList', {
    templateUrl: 'app/commerce/commerce_product_list.html',
    controller: EcommerceController
  });

})();
