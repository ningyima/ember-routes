import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    error(jqxhr) {
      if(jqxhr.status === 404) {
        this.intermediateTransitionTo('notfound');
      } else {
        return true; // bubble up
      }
    }
  },

  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=137a6e88818faede313ba76b1d7f53800b938f17`)
      .then(rawOrg => {
        rawOrg.oldId = rawOrg.id;
        rawOrg.id = rawOrg.name;
        return rawOrg;
      });
  }
});
