require("../.././index.js")
var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope, $timeout) {
    $scope.myHeader = 'Hello World!';
    $timeout(function() {
        $scope.myHeader = "How are you !"
    })
})