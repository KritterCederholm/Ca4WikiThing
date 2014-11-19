'use strict';

angular.module('myAppRename.viewCategories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewCategories', {
    templateUrl: 'app/viewCategories/Categories.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'api/user'
    }).
      success(function (data, status, headers, config) {
        $scope.wiki = data;
      }).
      error(function (data, status, headers, config) {
        $scope.error = data;
      });
});



