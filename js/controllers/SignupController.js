app.controller('SignupController', ['$scope','$rootScope','$location', function($scope, $rootScope, $firebaseAuth, $location){
  // Show the signup form.
  $scope.showSignup = true;
  $scope.signupMessage = '';
  $scope.showspinner = false;
  // Connect to firebase and create the firebase reference
  var ref = new Firebase("https://amber-fire-6969.firebaseio.com");
  //   creating user accounts
  $scope.signupButton = function(email, password) {
    $scope.showspinner = true;
    $scope.$evalAsync();

    ref.createUser({
      email    : email,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
        $scope.showspinner = false;
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        $scope.showspinner = false;
        $scope.showSignup = false;
        $scope.signupMessage = 'Account Successfully Created.'
      }
      $scope.$evalAsync();
    });
  }
}]);
