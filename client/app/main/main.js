'use strict';

angular.module('meanonlineshopApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
      .state('index', {
            url: "/index",
            templateUrl: "views/common/content.html",
            data: { pageTitle: 'Example view' },
            authenticate: true
        })
      .state('index.main', {
           // abstract: true,
            url: "/main",
            template: '<main></main>',
            authenticate: true
        })
      .state('index.minor', {
            url: "/minor",
            templateUrl: "minor.html",
            data: { pageTitle: 'Example view' }
        });
  });


angular
    .module('meanonlineshopApp')
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });