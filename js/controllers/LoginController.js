app.controller('LoginController', ['$scope','$rootScope', function($scope, $rootScope, $firebaseAuth){
  // pop-up function
  $(document).ready(function(){
    $("#show_login").click(function(){
      showpopup();
    });
    $("#close_login").click(function(){
      hidepopup();
    });
  });
  function showpopup()
  {
    $("#loginform").fadeIn();
    $("#loginform").css({"visibility":"visible","display":"block"});
  }
  function hidepopup()
  {
    $("#loginform").fadeOut();
    $("#loginform").css({"visibility":"hidden","display":"none"});
  }

// Connect to firebase and create the firebase reference
  var ref = new Firebase("https://amber-fire-6969.firebaseio.com");

  // logging users in + authenticating users
  $scope.loginButton = function(email, password) {
          ref.authWithPassword({
            email    : email,
            password : password
          }, function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
              $scope.errorMessage = 'Login Failed!';
            } else {
              console.log("Authenticated successfully with payload:", authData);
              $scope.errorMessage = '';
            }
          });
  }
  // ref.onAuth(function(authData){
  //     console.log(authData);
  // });

  // creating user accounts
// $scope.loginButton = function(email, password) {
//     ref.createUser({
//       email    : email,
//       password : password
//     }, function(error, userData) {
//       if (error) {
//         console.log("Error creating user:", error);
//       } else {
//         console.log("Successfully created user account with uid:", userData.uid);
//       }
//     });
// }
}]);
