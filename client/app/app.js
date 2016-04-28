'use strict';

angular.module('meanonlineshopApp', [
  'meanonlineshopApp.auth',
  'meanonlineshopApp.productGrid',
  'meanonlineshopApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ui.bootstrap',                 // Ui Bootstrap
  'toastr',
  'ngFileUpload',
  'ngTable'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
