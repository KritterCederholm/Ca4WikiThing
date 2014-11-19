'use strict';

angular.module('myAppRename.viewHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewHome', {
    templateUrl: '/partials/home',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function() {
});