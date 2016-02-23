app.directive('diamondform', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
		controller: 'DiamondFormController',
		templateUrl: 'js/directives/diamondform.html',
  };

});
