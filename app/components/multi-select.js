import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = [];
  selected = [];
  id = 'id';

  constructor() {
    super(...arguments); //appelle le constructeur parent et passe tous les arguments dont il a besoin
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target;
    var selectedIds = [...select.selectedOptions].map((option) => option.value);
    if (this.args.onChange) {
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0
        )
      );
    }
  }
}
