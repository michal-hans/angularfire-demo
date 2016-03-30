export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('todo', {
      url: '/',
      templateUrl: 'app/pages/todo/todo.html',
      controller: 'TodoController',
      controllerAs: 'todo'
    });

  $urlRouterProvider.otherwise('/');
}
