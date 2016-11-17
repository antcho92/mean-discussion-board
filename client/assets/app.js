var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'usersController',
      controllerAs: 'uC'
    })
    .when('/topics', {
      templateUrl: 'partials/topics.html',
      controller: 'topicsController',
      controllerAs: 'tC'
    })
    .when('/topic/:id', {
      templateUrl: 'partials/topic.html',
      controller: 'topicController',
      controllerAs: 'tC'
    })
    .otherwise('/');
})
