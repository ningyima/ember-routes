import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    let orgId = get(this.modelFor('org'), 'login');
    let repoId = get(this.modelFor('org.repo'), 'name');
    
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues?access_token=137a6e88818faede313ba76b1d7f53800b938f17`)
      .then(rawIssues => {
        return rawIssues.map(rawIssue => {
          rawIssue.oldId = rawIssue.id;
          rawIssue.id = rawIssue.name;
          return rawIssue;
        })
      })
  }
});
