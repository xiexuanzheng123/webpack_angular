var angular = require('angular');
var app = angular.module('myApp',[]);
app.controller('siteCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: '../app/data/sites.php'
    }).then(function successCallback(response) {
        $scope.names = response.data.sites;
    }, function errorCallback(response) {
        console.log(err);
    })
})