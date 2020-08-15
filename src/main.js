import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './icon';
import './scrollTo';
import 'bootstrap-vue/dist/bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app');
