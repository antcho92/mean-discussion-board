var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      controllerAs: 'lC'
    })
    .when('/topics', {
      templateUrl: 'partials/topics.html',
      controller: 'topicsController',
      controllerAs: 'tC'
    })
    .otherwise('/');
})
