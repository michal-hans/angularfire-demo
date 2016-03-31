export class AuthService {
  constructor(Firebase, FirebaseApp, FirebaseUrl, $firebaseObject, $firebaseAuth) {
    'ngInject';

    var authRef = new Firebase(FirebaseUrl);
    var service = this;

    this.Firebase = Firebase;
    this.FirebaseApp = FirebaseApp;
    this.FirebaseUrl = FirebaseUrl;
    this.firebaseAuth = $firebaseAuth(authRef);
    this.$firebaseObject = $firebaseObject;

    // Restore user session if possible
    this.getCurrentUser();

    // Authorization changes
    this.firebaseAuth.$onAuth(function() {
      service.getCurrentUser();
    })
  }

  getCurrentUser() {
    var service = this;
    var user = localStorage.getItem('firebase:session::' + this.FirebaseApp);
    service.currentUser = user ? JSON.parse(user) : undefined;
    return service.currentUser;
  }

  loginWithFacebook() {
    var service = this;
    this.firebaseAuth.$authWithOAuthPopup('facebook')
      .then(function (currentUser) {
        service.currentUser = currentUser;
      })
  }

  loginAsGuest() {
    var service = this;
    return service.firebaseAuth.$authAnonymously()
      .then(function () {
        return service.getCurrentUser();
      })
  }

  fetchUserData(userId) {
    var ref = new this.Firebase(this.FirebaseUrl + "/users/" + userId);
    return this.$firebaseObject(ref);
  }

  isAuthenticated() {
    return !!this.getCurrentUser();
  }

  logout() {
    this.firebaseAuth.$unauth();
    this.getCurrentUser();
  }
}
