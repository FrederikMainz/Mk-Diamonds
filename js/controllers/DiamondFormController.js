app.controller('DiamondFormController',['$scope', function ($scope) {
	$scope.master = {};

		 $scope.update = function(diamond) {
			 $scope.master = angular.copy(diamond);
		 };

		 $scope.reset = function() {
			 $scope.diamond = angular.copy($scope.master);
		 };

		 $scope.post = function() {

		 }

		 $scope.reset();
}]);
