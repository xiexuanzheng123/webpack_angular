var angular = require('angular');
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.x1 = 'JSON';
    $scope.x2 = angular.lowercase($scope.x1);
    // $scope.x3 = $scope.x1.lowercase();
})