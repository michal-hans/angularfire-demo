/* global malarkey:false, moment:false, Firebase:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { TodoController } from './pages/todo/todo.controller';
import { LoginController } from './pages/login/login.controller';
import { PresenceController } from './pages/presence/presence.controller.js';
import { AuthService } from '../app/components/auth/auth.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

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
  .constant('FirebaseApp', 'torid-fire-1359')
  .constant('FirebaseUrl', 'https://torid-fire-1359.firebaseio.com')

  .config(config)
  .config(routerConfig)

  .run(runBlock)

  .service('AuthService', AuthService)

  .controller('TodoController', TodoController)
  .controller('LoginController', LoginController)
  .controller('PresenceController', PresenceController)

  .directive('acmeNavbar', NavbarDirective)
