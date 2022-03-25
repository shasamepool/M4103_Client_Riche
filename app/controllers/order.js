import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class OrderController extends Controller {
  @tracked montant = 1;
  @service store;

  @action setmontant(val) {
    this.montant = this.montant + val;
  }
}
