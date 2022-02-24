import Route from '@ember/routing/route';
import action from '@ember/object';

export default class ContactsNewRoute extends Route {
  model() {
    return {};
  }

  @action save(data) {
    let contact = this.store.createRecord('contacts', data);
    contact.save().then(() => {
      this.transition('contacts');
    });
  }
}
