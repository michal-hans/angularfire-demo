/* global malarkey:false, moment:false, Firebase:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { TodoController } from './pages/todo/todo.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('angularfireDemo', [
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'toastr',
    'firebase'
  ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('Firebase', Firebase)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('TodoController', TodoController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
