import Service from '@ember/service';
import { includeItems } from 'tds/controllers/controllers';

/*Ce service ne sert a rien*/

export default class ElementServiceService extends Service {
  get nbSelect() {
    return includeItems.length + ' produits sélectionnés';
  }
}
