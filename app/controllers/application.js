import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';

class Item {
  @tracked itemContent;

  constructor(itemContent) {
    this.itemContent = itemContent;
  }

  toString() {
    return this.itemContent;
  }
}

export default class ApplicationController extends Controller {
  items = [new Item('Try resizing to add more items')];

  #itemNumber = 1;

  @action
  addItem() {
    const message = `${Date.now()}: Item #${this.#itemNumber}`;
    this.items.pushObject(new Item(message));
    console.log('addItem called', message);
    this.#itemNumber++;
  }
}
