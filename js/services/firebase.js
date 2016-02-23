
app.factory('get', [function($firebaseObject) {
	var ref = new Firebase("https://agwebapp.firebaseio.com/");

	 // download the data into a local object
	 var syncObject = $firebaseObject(ref);
	 return syncObject;
}]);
