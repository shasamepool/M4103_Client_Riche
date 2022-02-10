import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includeItems = [];
  @tracked dispoItems_ = [];
  @tracked includeItems_ = [];

  @action changeDispo(elements) {
    this.dispoItems_ = elements;
  }

  @action changeInclude(elements) {
    this.includeItems_ = elements;
  }

  @action add(source, dest, what) {
    dest.pushObjects(what);
    source.removeObjects(what);
  }

  @action remove(source, dest, what) {
    dest.pushObjects(source.get(what));
    source.removeObjects(what);
  }
}
