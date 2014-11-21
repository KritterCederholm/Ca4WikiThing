'use strict';

angular.module('myAppRename.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
      $routeProvider
              .when('/view1', {
            templateUrl: 'app/view1/view1.html',
            controller: 'View1Ctrl'
          })
            .when('/:wiki.indexOf(wikiPage)', {
                templateUrl: 'app/view1/wikiDetails.html',
                controller: 'wikiPageDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }])

    .factory('wiki', function($http) {
        function getData(callback){
            $http({
                method: 'GET',
                url: 'api/wiki',
                cache: true
            }).success(callback);
        }
        return {
            list: getData,
            find: function(title, callback){
                getData(function(data) {
                    var page = data.filter(function(entry) {
                        return entry.title === title;
                    })[0];
                    callback(page);
                });
            }
        }
    })

    .controller('View1Ctrl', function ($scope, wiki) {
        wiki.list(function(wiki) {
            $scope.wiki = wiki;
        });
    })

    .controller('wikiPageDetailsCtrl', function($scope, $routeParams, wiki) {
        wiki.find($routeParams.pageTitle, function(page) {
            $scope.page = page;
        });
    })

    .filter('encodeURI', function(){
        return window.encodeURI;
    });