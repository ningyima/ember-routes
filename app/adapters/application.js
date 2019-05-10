import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {      
      case 'repo':
        return `${this.get('host')}/repos/${query.orgId}/${query.repoId}?access_token=137a6e88818faede313ba76b1d7f53800b938f17`;
      default: 
        return this._super(...arguments);
    }
  },

  urlForQuery(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.orgId}/repos`;
        case 'issue':
        return `${this.get('host')}/repos/${query.orgId}/${query.repoId}/issues?access_token=137a6e88818faede313ba76b1d7f53800b938f17`;
      case 'contributor':
        return `${this.get('host')}/repos/${query.orgId}/${query.repoId}/contributors?access_token=137a6e88818faede313ba76b1d7f53800b938f17`;
      
      default:
        return this._super(...arguments);
    }
  }
});

