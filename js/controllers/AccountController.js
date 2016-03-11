app.controller('AccountController', ['$scope','$rootScope','$location','Auth', function($scope, $rootScope, $firebaseAuth, $location, Auth){

    // Connect to firebase and create the firebase reference
      var ref = new Firebase("https://amber-fire-6969.firebaseio.com");

    //   Button for loggin out
    $scope.logoutButton = function() {
        ref.unauth();
        $location.path('/');
    }
    console.log(ref);
}]);
