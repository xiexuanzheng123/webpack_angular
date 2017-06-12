var angular = require('angular')
require('../css/style')
var app = angular.module('myApp',[]);
app.directive("runoobDirective", function(){
    return {
        restrict: "M",
        replace: true,
        template: "<h1>自定义指令</h1>"
    };
});