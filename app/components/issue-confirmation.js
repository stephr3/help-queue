import Ember from 'ember';

export default Ember.Component.extend({
  closedTicket: false,
  actions: {
    delete(issue) {
      this.set('closedTicket', true);
      this.sendAction('delete', issue);
    }
  }
});
