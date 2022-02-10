import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includItems = [];
  @tracked dispoItems_ = [];
  @tracked includeItems_ = [];

  @action changeDispo(elements) {
    this.dispoItems_ = elements;
  }
}
