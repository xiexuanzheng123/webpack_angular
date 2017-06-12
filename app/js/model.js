var angular = require("angular")
require("../css/style")

var app = angular.module('myApp',[])
app.controller('myCtrl', function($scope) {
    $scope.name = 'John Smith';
})