export class PresenceController {
  constructor(Firebase, FirebaseUrl, AuthService, $state, $firebaseArray, moment) {
    'ngInject';

    if (!AuthService.isAuthenticated()) {
      $state.go('login');
      return;
    }

    var presenceRef = new Firebase(FirebaseUrl + "/apps/presence/" + AuthService.getCurrentUser().uid);
    var presenceListRef = new Firebase(FirebaseUrl + "/apps/presence/");
    var isOnline = new Firebase(FirebaseUrl + "/.info/connected");
    this.AuthService = AuthService;

    this.list = $firebaseArray(presenceListRef);

    isOnline.on('value', function(snapshot) {
      if (snapshot.val()) {
        var user = AuthService.getCurrentUser();
        var isGuest = !!user.facebook;
        var userName = isGuest ? user.facebook.displayName : 'Guest';

        if (isGuest) {
          presenceRef.onDisconnect().remove();
        } else {
          presenceRef.onDisconnect().set({status: "offline", date: moment().format(), name: userName});
        }

        presenceRef.set({status: "online", date: moment().format(), name: userName});
      }
    })
  }
}
