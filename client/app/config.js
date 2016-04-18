/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main2");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "main/content.html",
        })
        .state('index.main', {
            url: "/main2",
            templateUrl: "main/main2.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "main/minor.html",
            data: { pageTitle: 'Example view' }
        })
}
angular
    .module('meanonlineshopApp')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });