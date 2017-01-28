import WidgetServices from './widget.service.js'

const Widget = angular
  .module('services.widget', [])
  .service('WidgetService', WidgetServices)
  .name;

export default Widget;