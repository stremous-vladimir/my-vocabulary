import HeaderComponent from './header.component.js'

import './assets/header.style.sass'

const Header = angular
  .module('components.header', [])
  .component('header', HeaderComponent)
  .name;

export default Header;