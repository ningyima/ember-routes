import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    let orgId = get(this.modelFor('org'), 'login');

    return this.store.query('repo', {orgId});

    // return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=137a6e88818faede313ba76b1d7f53800b938f17`)
    //   .then(rawRepos => {
    //     return rawRepos.map(rawRepo => {
    //       rawRepo.oldId = rawRepo.id;
    //       rawRepo.id = rawRepo.name;
    //       return rawRepo;
    //     })
    //   })
  }
});
