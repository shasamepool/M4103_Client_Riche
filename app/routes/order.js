import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class OrderRoute extends Route {
  @service store;
  @service userAuth;


  model(params) {

    return {'order':this.store
      .query('order', {
        filter: {
          id: params.order_id,
        },
      })};
  }
}
