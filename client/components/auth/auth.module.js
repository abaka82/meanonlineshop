'use strict';

angular.module('meanonlineshopApp.auth', [
  'meanonlineshopApp.constants',
  'meanonlineshopApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
