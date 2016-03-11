app.factory("Auth", ["$firebaseAuth",
function($firebaseAuth) {
    var ref = new Firebase("https://amber-fire-6969.firebaseio.com");
    return $firebaseAuth(ref);
}
]);
