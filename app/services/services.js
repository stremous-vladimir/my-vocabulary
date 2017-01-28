import Widget from './widget/widget.js';

const Services = angular
  .module('myVocabulary.services', [
    Widget
  ]).name;

export default Services;