import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=137a6e88818faede313ba76b1d7f53800b938f17`)
              .then(rawContributors => {
                return rawContributors.map(rawContributor => {
                  rawContributor.oldId = rawContributor.id;
                  rawContributor.id = rawContributor.name;
                  return rawContributor;
                })
              })
  }
});
