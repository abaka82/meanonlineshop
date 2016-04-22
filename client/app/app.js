'use strict';

angular.module('meanonlineshopApp', [
  'meanonlineshopApp.auth',
  'meanonlineshopApp.admin',
  'meanonlineshopApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ui.bootstrap',                 // Ui Bootstrap
  'toastr'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
