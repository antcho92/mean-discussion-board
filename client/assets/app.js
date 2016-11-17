var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'usersController',
      controllerAs: 'uC'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dC'
    })
    .when('/topic/:topicId', {
      templateUrl: 'partials/topic.html',
      controller: 'topicController',
      controllerAs: 'tC'
    })
    .otherwise('/');
})
