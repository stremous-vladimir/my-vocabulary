class WidgetService {

  constructor($http) {
    this.$http = $http;

    this.origin = 'http://babeltop.partner.scaleflex.cloud/api/';
    this.dictionariesMetod = 'dictionaries';
  }

  getDictionaries() {
    let url = [this.origin, this.dictionariesMetod];
    return this.$http.get(url.join(''));
  }

}

WidgetService.$inject = ['$http'];

export default WidgetService;