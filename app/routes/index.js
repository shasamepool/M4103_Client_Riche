import { action } from '@ember/object';
import Abstractroute from './AbstractRoute';
import { service } from '@ember/service';

export default class IndexRoute extends Abstractroute {
  @service store;

  model() {
    return {};
  }

  /*
  Seras appeler dasn le fomulaire de connx avec le user
  pour voir si l'email est associée a un employee ..
  */

  @action login(user) {
    this.store
      .query('employee', {
        filter: {
          email: user.email,
        },
      })
      .then((employees) => {
        if (employees.length) {
          let connected = employees.firstObject;
          if (connected.password && connected.password === user.password) {
            this.userAuth.login(connected);
            this.transitionTo('board');
          }
        }
      });
  }
}
