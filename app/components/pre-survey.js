import Ember from 'ember';

export default Ember.Component.extend({
  firstQuestion: true,
  secondQuestion: false,
  thirdQuestion: false,
  newIssue: false,
  actions: {
    secondQuestion() {
      this.set('firstQuestion', false);
      this.set('secondQuestion', true);
    },
    thirdQuestion() {
      this.set('secondQuestion', false);
      this.set('thirdQuestion', true);
    },
    newIssue() {
      this.set('thirdQuestion', false);
      this.set('newIssue', true);
    }
  }
});
