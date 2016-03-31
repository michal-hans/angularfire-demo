export class PresenceController {
  constructor($log, Firebase, AuthService, $state, $firebaseArray, moment) {
    'ngInject';

    if (!AuthService.authData) {
      $state.go('login');
      return;
    }

    var presenceRef = new Firebase("https://torid-fire-1359.firebaseio.com/apps/presence/" + AuthService.authData.uid);
    var presenceListRef = new Firebase("https://torid-fire-1359.firebaseio.com/apps/presence/");
    var isOnline = new Firebase("https://torid-fire-1359.firebaseio.com/.info/connected");
    this.AuthService = AuthService;

    this.list = $firebaseArray(presenceListRef);

    isOnline.on('value', function(snapshot) {
      if (snapshot.val()) {
        var isGuest = !!AuthService.authData.facebook;
        var userName = isGuest ? AuthService.authData.facebook.displayName : 'Guest';

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
