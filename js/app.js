var app = angular.module('app', ['ngRoute' , 'firebase']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
