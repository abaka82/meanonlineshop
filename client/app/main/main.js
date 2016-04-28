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

      /////// Admin state //////////
       .state('admin', {
            abstract: true,
            url: "/admin",
            templateUrl: "views/common/content.html",
            authenticate: true
        })
       .state('admin.user_list', {
            url: "/user_list",
            templateUrl: "app/admin/user/user.html",
            data: { pageTitle: 'Admin user' },
            controller: 'UserListController',
          //  controllerAs: 'vm',
            authenticate: true
        })
       .state('admin.create_product', {
            url: "/create_product",
            templateUrl: "app/admin/product/admin_create_product.html",
            data: { pageTitle: 'Create Product' },
            controller: 'AdminProductController',
          //  controllerAs: 'vm',
            authenticate: true
        })
       .state('admin.list_product', {
            url: "/list_product",
            templateUrl: "app/admin/product/admin_list_product.html",
            data: { pageTitle: 'Product List' },
            controller: 'AdminProductController',
          //  controllerAs: 'vm',
            authenticate: true
        })
       .state('admin.edit_product', {
            url: "/edit_product/:id",
            templateUrl: "app/admin/product/admin_edit_product.html",
            data: { pageTitle: 'Edit Product' },
            controller: 'EditProductController',
          //  controllerAs: 'vm',
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
           // controllerAs: 'vm',
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