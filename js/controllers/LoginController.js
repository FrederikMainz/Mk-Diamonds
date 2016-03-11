app.controller('LoginController', ['$scope','$rootScope' ,'$firebaseAuth','$location','$timeout', function($scope, $rootScope, $firebaseAuth, $location, $timeout){
    // pop-up function
    $(document).ready(function(){
        $("#show_login").click(function(){
            showpopup();
        });
        $("#close_login").click(function(){
            hidepopup();
        });
    });
<<<<<<< Updated upstream
    $("#close_login").click(function(){
      hidepopup();
    });
  });
  function showpopup()
  {
    $("#loginform").fadeIn();
    $("#loginform").css({"visibility":"visible","display":"block"});
    $(".login-background").css({"visibility":"visible","display":"block"});
  }
  function hidepopup()
  {
    $("#loginform").fadeOut();
    $("#loginform").css({"visibility":"hidden","display":"none"});
    $(".login-background").css({"visibility":"hidden","display":"none"});
  }
=======
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
>>>>>>> Stashed changes

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
                $timeout(function () {
                    $location.path('/account');
                    $("#loginform").css({"visibility":"hidden","display":"none"});
                });
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
