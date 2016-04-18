'use strict';

angular.module('meanonlineshopApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main");
    
    $stateProvider
      .state('index', {
                    abstract: true,
            url: "/index",
       // url: '/',
        template: '<main></main>',
//templateUrl: "main.html",
      })
      .state('index.main', {
            url: "/main",
            templateUrl: "content.html",
            data: { pageTitle: 'Example view' }
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