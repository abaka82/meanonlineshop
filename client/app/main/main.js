'use strict';

angular.module('meanonlineshopApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
      .state('index', {
            url: "/index",
            templateUrl: "views/common/content.html",
            data: { pageTitle: 'Example view' }
        })
      
      ////// Auth state ///////  
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'login',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
                          $state.current.referrer ||
                          'login';
          Auth.logout();
          $state.go(referrer);
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('index.settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      })
        
      ////// Main state ///////  
      .state('index.main', {
           // abstract: true,
            url: "/main",
            template: '<main></main>',
        })
      .state('index.minor', {
            url: "/minor",
            templateUrl: "minor.html",
            data: { pageTitle: 'Example view' }
        });
  })
  
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });


angular
    .module('meanonlineshopApp')
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });