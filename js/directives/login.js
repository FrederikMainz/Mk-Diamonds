app.directive('loginService', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    controller: 'LoginController',
    templateUrl: 'js/directives/login.html'
  };
});
