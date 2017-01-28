class DictionariesController {

  constructor(WidgetService) {
    this.WidgetService = WidgetService;

    this.dictionaries = [];
  }

  $onInit() {
    this.WidgetService.getDictionaries().then((response) => {
   
      this.dictionaries =  response.data.dictionaries.personal;
      console.log(this.dictionaries);
    });
    
  }

}

DictionariesController.$inject = ['WidgetService'];

export default DictionariesController;