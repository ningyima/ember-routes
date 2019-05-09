import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  favorites: service('favorites'),

  actions: {
    favoriteClicked(org) {
      if(this.get('favorites.items').indexOf(org) < 0) {
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unfavoriteItem(org);
      }
    }
  },

  model() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.run.later(() => {
        resolve([{
          id: "emberjs"
        }, {
          id: "ember-cli"
        }, {
          id: "microsoft"
        }, {
          id: "yahoo"
        }, {
          id: "netflix"
        }, {
          id: "facebook"
        }])
      }, 300)
    })
  }
});
