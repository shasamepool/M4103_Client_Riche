import Abstractroute from './AbstractRoute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  model() {
    //let user = this.userAuth.user;
    return this.userAuth.getUser();
    /*
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }*/
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
