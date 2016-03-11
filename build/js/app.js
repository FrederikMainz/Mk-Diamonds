var app=angular.module("app",["ngRoute","firebase"]);app.config(function(e){e.when("/",{controller:"HomeController",templateUrl:"views/home.html"}).otherwise({redirectTo:"/"})});
