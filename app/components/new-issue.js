import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
        timestamp: Date.now()
      }
      this.sendAction('save', params);
    }
  }
});
