var angular = require('angular')
require('../../app/css/style.css')
var app = angular.module('myApp',[]);
app.controller('customersCtrl', function($scope, $http) {
    $http.get('../../app/data/customers.php').then(function(result) {
        console.log(result)
        $scope.names = result.data.records;
    })
})