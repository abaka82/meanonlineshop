'use strict';

angular.module('meanonlineshopApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
      .state('index', {
            url: "/index",
            abstract: true,
            templateUrl: "views/common/content.html",
            data: { pageTitle: 'Example view' },
            authenticate: true
        })
      
      ////// Auth state ///////  
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        data: { pageTitle: 'Login', specialClass: 'gray-bg' }
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
            url: "/products_grid",
            templateUrl: "app/commerce/ecommerce_products_grid.html",
            data: { pageTitle: 'E-commerce grid' },
            controller: 'ProductGridController',
            controllerAs: 'vm',
            authenticate: true
        })
      .state('index.minor', {
            url: "/minor",
            templateUrl: "minor.html",
            data: { pageTitle: 'Example view' },
            authenticate: true
        })

      /////// Commerce state //////////
       .state('commerce', {
            abstract: true,
            url: "/commerce",
            templateUrl: "views/common/content.html",
            authenticate: true
        })
       .state('commerce.products_grid', {
            url: "/products_grid",
            templateUrl: "app/commerce/ecommerce_products_grid.html",
            data: { pageTitle: 'E-commerce grid' },
            controller: 'ProductGridController',
            controllerAs: 'vm',
            authenticate: true
        })
        .state('commerce.product_list', {
            url: "/product_list",
            templateUrl: "app/commerce/ecommerce_product_list.html",
            controller: 'EcommerceController',
            controllerAs: 'ec',
            data: { pageTitle: 'E-commerce product list' },
            authenticate: true
        })
        .state('commerce.orders', {
            url: "/orders",
            templateUrl: "app/commerce/ecommerce_orders.html",
            data: { pageTitle: 'E-commerce orders' },
            authenticate: true
        })
        .state('commerce.product', {
            url: "/product",
            templateUrl: "app/commerce/ecommerce_product.html",
            data: { pageTitle: 'Product edit' },
            authenticate: true
        })
        .state('commerce.product_details', {
            url: "/product_details/:id",
            templateUrl: "app/commerce/ecommerce_product_details.html",
            data: { pageTitle: 'E-commerce Product detail' },
            controller: 'ProductDetailsController',
            controllerAs: 'vm',
            authenticate: true
        })
        .state('commerce.payments', {
            url: "/payments",
            templateUrl: "app/commerce/ecommerce_payments.html",
            data: { pageTitle: 'E-commerce payments' },
            authenticate: true
        })
        .state('commerce.cart', {
            url: "/cart",
            templateUrl: "app/commerce/ecommerce_cart.html",
            data: { pageTitle: 'Shopping cart' },
            authenticate: true
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