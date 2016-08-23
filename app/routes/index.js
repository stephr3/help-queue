import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newIssue = this.store.createRecord('issue', params);
      newIssue.save();
      this.transitionTo('issue', newIssue.id);
    }
  }
});
