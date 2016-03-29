export class HomeController {
  constructor () {
    'ngInject';

    this.list = this.getListItems();
    this.listExpanded = true;
  }

  toggleList() {
    this.listExpanded = !this.listExpanded;
  }

  getListItems() {
    return [
      {name: 'milk'},
      {name: 'orange'},
      {name: 'banana'},
      {name: 'water'}
    ]
  }

  addItem(newItemName) {
    this.list.push({name: newItemName});
    this.newItemField = '';
  }

  removeItem(index) {
    this.list.splice(index, 1);
  }
}
