'use strict';

angular.module('meanonlineshopApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
      .state('index', {
            abstract: true,
            url: "/index",
            template: '<main></main>',
        })
       .state('login', {
            url: "/login",
            templateUrl: "app/account/login/login.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' },
            controller: 'LoginController',
            controllerAs: 'vm'
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