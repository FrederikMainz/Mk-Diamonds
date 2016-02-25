app.controller('DiamondFormController',['$scope','firebaseService' , function ($scope, firebaseService) {
	$scope.master = {};
	$scope.diamondData = firebaseService;

		 $scope.update = function(diamond) {
			 $scope.master = angular.copy(diamond);
		 };

		 $scope.reset = function() {
			 $scope.diamond = angular.copy($scope.master);
		 };

		 $scope.post = function(postObject) {
			$scope.diamondData.push().set(postObject);
			$scope.diamondData.$save();

		 }


		 $scope.reset();
}]);
