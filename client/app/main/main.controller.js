'use strict';

(function() {

class MainController {

  constructor($http, $scope) {
    this.$http = $http;
    this.awesomeThings = [];
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
       console.log('masuk');
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('meanonlineshopApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
