app.controller('AccountController', ['$scope','$rootScope','$timeout','$location', function($scope, $rootScope, $timeout, $location){

    // Connect to firebase and create the firebase reference
    var ref = new Firebase("https://amber-fire-6969.firebaseio.com");

    //   Button for loggin out
    $scope.logoutButton = function() {
        ref.unauth();
        $timeout(function () {
            $location.path('/');
        });
    }
    console.log(ref);
}]);
