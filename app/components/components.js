import Header from './header/header.js';
import PlayMode from './playMode/playMode.js';
import Dictionaries from './dictionaries/dictionaries.js';

const Components = angular
  .module('myVocabulary.components', [
    Header,
    PlayMode,
    Dictionaries
  ]).name;

export default Components;
