import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('String') nom;
  @attr('String') prenom;
  @attr('String') email;
}
