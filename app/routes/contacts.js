import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Contacts from '../classes/contacts';

export default class ContactsRoute extends Route {
  @service store;

  model() {
    return new Contacts(this.store.findAll('contacts'));

  @action
  delete(contact) {
    contact.deleteRecord();
    //contacts.save();
  }
}
