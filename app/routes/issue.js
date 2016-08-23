import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    delete(issue) {
      var issue_id = issue.id;
      issue.destroyRecord();
      this.transitionTo('issue', issue_id);
    }
  }
});
