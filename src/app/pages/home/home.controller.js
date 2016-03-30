export class HomeController {
  constructor ($firebaseObject, $firebaseArray) {
    'ngInject';

    var ref = new Firebase("https://torid-fire-1359.firebaseio.com/apps/todo");

    // download the data into a local object
    this.fireData = $firebaseArray(ref);
    this.list = this.fireData;
  }

  addItem(newItemName) {
    this.list.$add({name: newItemName});
    this.newItemField = '';
  }

  removeItem(index) {
    this.list.$remove(index, 1);
  }
}
