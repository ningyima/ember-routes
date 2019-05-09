import Service from '@ember/service';

export default Service.extend({
  items: [],

  log() {
    console.log(
      this.get('items')
        .map(x => x.id)
        .join(', ')
    );
  },

  favoriteItem(item) {
    this.get('items').addObject(item);
    this.log();
  },

  unfavoriteItem(item) {
    this.get('items').removeObject(item);
    this.log();
  }
});
