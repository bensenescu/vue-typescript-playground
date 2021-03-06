// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  vuetify,
  components: { App },
  render: h => h(App),
});
