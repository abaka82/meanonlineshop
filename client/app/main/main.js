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
        })

      /////// Commerce state //////////
       .state('index.products_grid', {
            url: "/products_grid",
            templateUrl: "views/commerce/ecommerce_products_grid.html",
            data: { pageTitle: 'E-commerce grid' }
        })
        .state('index.product_list', {
            url: "/product_list",
            templateUrl: "views/commerce/ecommerce_product_list.html",
            data: { pageTitle: 'E-commerce product list' }
        })
        .state('index.orders', {
            url: "/orders",
            templateUrl: "views/commerce/ecommerce_orders.html",
            data: { pageTitle: 'E-commerce orders' }
        })
        .state('index.product', {
            url: "/product",
            templateUrl: "views/commerce/ecommerce_product.html",
            data: { pageTitle: 'Product edit' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }

        })
        .state('index.product_details', {
            url: "/product_details",
            templateUrl: "views/commerce/ecommerce_product_details.html",
            data: { pageTitle: 'E-commerce Product detail' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/slick/slick.css','css/plugins/slick/slick-theme.css','js/plugins/slick/slick.min.js']
                        },
                        {
                            name: 'slick',
                            files: ['js/plugins/slick/angular-slick.min.js']
                        }
                    ]);
                }
            }
        })
        .state('index.payments', {
            url: "/payments",
            templateUrl: "views/commerce/ecommerce_payments.html",
            data: { pageTitle: 'E-commerce payments' }
        })
        .state('index.cart', {
            url: "/cart",
            templateUrl: "views/commerce/ecommerce_cart.html",
            data: { pageTitle: 'Shopping cart' }
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