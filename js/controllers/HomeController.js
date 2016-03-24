app.controller('HomeController',['$scope','$timeout','$location', '$rootScope','$firebaseAuth', function ($scope, $timeout, $location, $rootScope, $firebaseAuth) {

  var ref = new Firebase("https://amber-fire-6969.firebaseio.com");
  $scope.auth = $firebaseAuth(ref);

  $rootScope.isLoggedIn = false;

  $scope.auth.$onAuth(function(authData) {
    if (authData){
      console.log(authData);
      $rootScope.isLoggedIn = true;
      $rootScope.email = authData.password.email;
      $scope.$apply();
    } else{
      $rootScope.isLoggedIn = false;
      $rootScope.email = "";
      $scope.$apply();
    }
  });

  //   Button for loggin out - that redirects to the front page when unath has occured.
  $rootScope.logoutButton = function() {
    ref.unauth();
    $timeout(function () {
      $location.path('/');
    });
  }
}]);
