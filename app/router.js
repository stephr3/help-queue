import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('issue', {path: '/ticket/:issue_id'});
  this.route('queue');
});

export default Router;
