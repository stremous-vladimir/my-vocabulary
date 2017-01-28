import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Components from './components/components.js';
import Services from './services/services.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = angular
  .module('myVocabulary', [
    uiRouter,
    Components,
    Services
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  }).name;

export default App;
