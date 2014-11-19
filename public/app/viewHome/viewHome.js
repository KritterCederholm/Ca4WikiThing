'use strict';

angular.module('myAppRename.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewHome', {
    templateUrl: '/partials/home',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function() {
});