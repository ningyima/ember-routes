import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    // let org = this.modelFor('org');
    // return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}?access_token=137a6e88818faede313ba76b1d7f53800b938f17`)
    //   .then(rawRepo => {
    //     rawRepo.oldId = rawRepo.id;
    //     rawRepo.id = rawRepo.name;
    //     return rawRepo;
    //   })

    let orgId = get(this.modelFor('org'), 'login');
    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid,
    })
  }
});
