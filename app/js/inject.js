var angular = require('angular');
var ngRoute = require('angular-route')
var mainApp = angular.module('myApp', ['ngRoute']);
mainApp.value('defaultValue', 5);

// mainApp.factory('MathService', function() {
//     var factory = {};
//     factory.multiply = function(a, b) {
//         return a * b;
//     }
//     return factory;
// });

mainApp.config(function($provide) {
    $provide.provider('MathService', function() {
        this.$get = function() {
            var factory = {};
 
            factory.multiply = function(a, b) {
                return a * b;
            }
            return factory;
        };
    });
});

mainApp.service('CalcService', function(MathService) {
    this.square = function(a) {
        return MathService.multiply(a, a);
    }
});

mainApp.controller('myCtrl', function($scope, CalcService, defaultInput) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
        $scope.result = CalcService.square($scope.number);
    }
})