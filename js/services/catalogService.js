app.factory('catalogService', ["$firebaseObject",
function($firebaseObject) {
	var ref = new Firebase("https://mk-diamonds-catalog.firebaseio.com");

	// download the data into a local object
	var syncObject = $firebaseObject(ref);

	return syncObject;
}]);
