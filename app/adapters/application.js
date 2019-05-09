import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `https://api.github.com/repos/${query.orgId}/${query.repoId}?access_token=137a6e88818faede313ba76b1d7f538`;
      default: 
        return this._super(...arguments);
    }
  },

  urlForQuery(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
  }
});
