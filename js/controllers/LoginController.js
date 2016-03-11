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

  // creating user accounts
  var ref = new Firebase("https://amber-fire-6969.firebaseio.com");
  ref.createUser({
    email    : "bobtony@firebase.com",
    password : "correcthorsebatterystaple"
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });

  // $scope.authObj = $firebaseAuth(ref);
  // $scope.authObj.$authWithPassword({
  //   email: "bobtony@firebase.com",
  //   password: "correcthorsebatterystaple"
  // }).then(function(authData){
  //   // User authenticated
  // }).catch(function(error){
  //   // Authentication error
  // });

  // logging users in + authenticating users
  ref.authWithPassword({
    email    : "bobtony@firebase.com",
    password : "correcthorsebatterystaple"
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });


}]);
