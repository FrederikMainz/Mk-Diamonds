app.factory('userService', ["$firebaseObject",
function($firebaseObject) {

  return function(catalog) {
    var ref = new Firebase("https://mk-diamonds-catalog.firebaseio.com/diamonds");

    // create an instance of User (the new operator is required)
    return ref;
  }
}]);
