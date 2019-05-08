import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}?access_token=137a6e88818faede313ba76b1d7f53800b938f17`)
      .then(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      })
  }
});
