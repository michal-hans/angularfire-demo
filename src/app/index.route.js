export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/pages/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

  $urlRouterProvider.otherwise('/');
}
