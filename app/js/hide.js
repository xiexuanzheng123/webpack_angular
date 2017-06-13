var angular = require('angular');
var app = angular.module('myApp', []);
app.directive('runoobDirective', function() {
    return {
        template: '指令构造器中构造'
    }
})
app.controller('persionCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    }
})