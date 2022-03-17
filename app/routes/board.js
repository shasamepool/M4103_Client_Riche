import Abstractroute from './AbstractRoute';
import { action } from '@ember/object';
import { service } from '@ember/service';
import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  @service store;

  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetail',
        }),
        employee: user,
      });
    }
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
