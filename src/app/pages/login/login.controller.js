export class LoginController {
  constructor(AuthService, $state) {
    'ngInject';

    this.AuthService = AuthService;
    this.$state = $state;
  }

  loginAsGuest() {
    var vm = this;
    this.AuthService.loginAsGuest()
      .then(function () {
        vm.$state.go('presence');
      })
  }

  logout() {
    return this.AuthService.logout();
  }

  facebookLogin() {
    return this.AuthService.loginWithFacebook();
  }
}
