import DictionariesComponent from './dictionaries.component.js';

import './assets/dictionaries.style.sass'

const Dictionaries = angular
  .module('components.dictionaries', [])
  .component('dictionaries', DictionariesComponent)
  .config(($stateProvider) => {
    $stateProvider.state('get', {
      url: '/get',
      component: 'dictionaries'
    })
  })
  .name;

export default Dictionaries;