app.controller('AccountController', ['$scope','$rootScope','$timeout','$location','catalogService', function($scope, $rootScope, $timeout, $location, catalogService){

  // Connect to firebase and create the firebase reference
  var ref = new Firebase("https://amber-fire-6969.firebaseio.com");
  
  console.log(catalogService);
  $scope.catalog = catalogService;


  $scope.showdetails = function(diamond){
    diamond.Visible = !diamond.Visible;
  }
}]);
