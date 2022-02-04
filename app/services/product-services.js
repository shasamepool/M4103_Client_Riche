import Service from '@ember/service';
import { action } from '@ember/object';
import { dProducts, dPromos } from 'tds/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return this.products.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let total = (somme, product) => product.price + somme;
    return this.activeServices.reduce(total, 0);
  }
  /*
  function sum(total, num) {
    return total + Math.round(num);
  }*/
}
