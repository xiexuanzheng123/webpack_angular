var angular = require('angular')
var app = angular.module('myApp', [])
app.controller('myCtrl', function($scope) {
    $scope.name = 'Runoob',
    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.name + '!';
    }
})