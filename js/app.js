var app = angular.module('app', ['ngRoute','firebase']);

app.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireAuth promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
            $location.path("/login");
        }
    });
}]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html',
        resolve: {
            // controller will not be loaded until $waitForAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth", function(Auth) {
                // $waitForAuth returns a promise so the resolve waits for it to complete
                return Auth.$waitForAuth();
            }]
        }
    })
    .when('/signup', {
        controller: 'SignupController',
        templateUrl: 'views/signup.html'
    })
    .when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
    })
    .when("/account", {
        // the rest is the same for ui-router and ngRoute...
        controller: "AccountController",
        templateUrl: "views/account.html",
        resolve: {
            // controller will not be loaded until $requireAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth", function(Auth) {
                // $requireAuth returns a promise so the resolve waits for it to complete
                // If the promise is rejected, it will throw a $stateChangeError (see above)
                return Auth.$requireAuth();
            }]
        }
    })
    .otherwise({
        redirectTo: '/'
    });
});
