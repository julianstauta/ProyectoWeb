// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

// Main app
import App from '../imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App)
  }).$mount('app');
});