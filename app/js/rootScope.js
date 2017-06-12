var angular = require('angular')
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $rootScope) {
    $scope.names = ["Email", "Tobias", "Linus"];
    $rootScope.lastname = "Refsnes";
})