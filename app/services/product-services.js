import Service from '@ember/service';
import { dProducts, dPromos } from 'tds/data/datas';

export default class ProductServicesService extends Service {


  get activeServices(){
    return dProducts.filterBy('active',true);
  }

  get countActive(){
    return this.activeServices.size;
  }

  get sumActive(){
    const reducer = (previousValue, currentValue);
    return this.activeServices.reduce(reducer);
  }
}
