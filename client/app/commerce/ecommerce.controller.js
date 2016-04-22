'use strict';

(function() {

class EcommerceController {
 newProduct = {};
  

  constructor($http, $scope, $state, $uibModal,$timeout) {
    this.$http = $http;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.$timeout = $timeout;
  }

	addProduct(form) {
  	
   // if (this.newProduct) {
   		console.log(this.newProduct.title);
   		console.log(form);
        this.$http.post('/api/products', 
      	{
      	Title: this.newProduct.title,
      	Author: this.newProduct.author,
  			Description: this.newProduct.description,
  			Category: this.newProduct.category,
  			Image: this.newProduct.image,
  			Price: this.newProduct.price,
  			Stock: this.newProduct.stock,
  			Status: this.newProduct.status
      	});
   		this.newProduct = {};
   // }
 	}

 // deleteThing(thing) {
 //   this.$http.delete('/api/product/' + product._id);
 // }

 /**
 * modalDemoCtrl - Controller used to run modal view
 * used in Basic form view
 */
 
 DialogDemoCtrl($scope, $timeout, $dialog){
    $timeout(function(){
      $dialog.dialog({}).open('views/common/modal_example.html');  
    }, 3000);  
   }
}

angular.module('meanonlineshopApp')
  .controller('EcommerceController', EcommerceController);

})();
