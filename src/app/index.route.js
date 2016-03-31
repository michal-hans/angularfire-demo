export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('todo', {
      url: '/',
      templateUrl: 'app/pages/todo/todo.html',
      controller: 'TodoController',
      controllerAs: 'todo'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/pages/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('presence', {
      url: '/presence',
      templateUrl: 'app/pages/presence/presence.html',
      controller: 'PresenceController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
