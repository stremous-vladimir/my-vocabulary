import PlayModeComponent from './playMode.component.js';

import './assets/playMode.style.sass';

const PlayMode = angular
  .module('components.playMode', [])
  .component('playMode', PlayModeComponent)
  .config(($stateProvider) => {
    $stateProvider.state('cards', {
      url: '/cards',
      component: 'playMode'
    })
  })
  .name;

export default PlayMode;