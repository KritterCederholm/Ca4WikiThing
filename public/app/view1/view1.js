'use strict';

angular.module('myAppRename.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/view1.html', //templateUrl: '/partials/partial1',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','InfoFactory','InfoService', function($scope,InfoFactory,InfoService) {
        $scope.infoFactory = InfoFactory.getInfo();
        $scope.infoService = InfoService.getInfo();
}]);