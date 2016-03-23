app.controller('AboutController', ['$scope', '$rootScope','$location', function($scope, $rootScope, $location){
    $scope.aboutInfo = function() {
      $location.url('views/about.html');
    };
}]);
