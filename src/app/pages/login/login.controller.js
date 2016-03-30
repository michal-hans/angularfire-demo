export class LoginController {
  constructor($log, Firebase, $firebaseAuth, AuthService) {
    'ngInject';

    var ref = new Firebase("https://torid-fire-1359.firebaseio.com/apps/todo");
    this.auth = $firebaseAuth(ref);
    this.AuthService = AuthService;
    this.log = $log;
  }

  login(username, password) {
    var vm = this;
    this.log.info('$authAnonymously...', [username, password])

    return vm.auth.$authAnonymously()
      .then(function (authData) {
        vm.AuthService.authData = authData;
        vm.log.info('authData...', vm.AuthService.authData);
      })
      .catch(function (error) {
        vm.error = error;
      });
  }

  logout(){
    var vm = this;
    vm.AuthService.authData = false;
    vm.auth.$unauth();
    vm.log.info('logout...')
  }

  facebookLogin(){
    var vm = this;
    vm.log.info('login with facebook...');
    vm.auth.$authWithOAuthPopup('facebook').then(function (authData) {
      vm.AuthService.authData = authData;
    })
  }
}
