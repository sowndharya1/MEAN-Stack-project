var myMed = angular.module("myMed", ["ngRoute"]);
myMed.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller : 'myController'
    })
  })
