var angular = require('angular')
var app = angular.module('myApp',[])
app.controller('myCtrl', function($scope) {
    $scope.msg = 'Runoob'
})
app.filter('reverse', function() {
    return function(text) {
        return text.split("").reverse().join("");
    }
})