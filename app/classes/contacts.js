export default class Contacts {
  data = [];

  constructor(data) {
    this.datas = data;
  }

  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }

  get deleted() {
    return this.datas.filterBy('isDeleted', true);
  }

  get deletedCount() {
    return this.deleted.length;
  }
}
