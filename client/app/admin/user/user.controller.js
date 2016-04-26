'use strict';

angular.module('meanonlineshopApp')

  .controller('UserListController', function ($scope, User, ngTableParams) {

    $scope.usersTable = new ngTableParams({
                page: 1,
                count: 3
            }, {
                total: 0, // length of data
                getData: function ($defer, params) {
                    // Use the User $resource to fetch all users
                    User.query({}, function(response) {
                      $scope.users = response;
                      $scope.data = $scope.users.slice((params.page() - 1) * params.count(), params.page() * params.count());
                      params.total($scope.users.length); // set total for recalc pagination
                      $defer.resolve($scope.data);
                    });
                }
            });
  })