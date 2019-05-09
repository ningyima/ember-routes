import Component from '@ember/component';
import isInArray from 'github-ui-ningyi/utils/is-in-array';

export default Component.extend({
  tagName: 'li',

  favorites: Ember.inject.service('favorites'),

  classNames: ['github-org'],

  isFavorited: isInArray('org', 'favorites.items'),

  actions: {
    favoriteWasClicked() {
      this.sendAction('on-fav-clicked', this.get('org'));
    }
  }
});
