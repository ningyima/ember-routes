import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

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
    return new Promise((resolve, reject) => {
      later(() => {
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
