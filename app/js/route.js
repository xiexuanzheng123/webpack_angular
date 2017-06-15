var angular = require('angular');
// require('angular-route');s
var app = angular.module('routingDemoApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {template: '这是首页'})
    .when('/computers', {template: '这是电脑分类页面'})
    .when('/printers', {template: '这是打印机页面'})
    .otherwise({redirectTo: '/'});
}])