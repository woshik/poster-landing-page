import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import { BootstrapVue } from 'bootstrap-vue';
import router from './router';
import './icon';
import './scrollTo';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/style.css';

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// routuing
router.beforeEach((to, from, next) => {
  console.log(to)
  const lang = to.params.lang;

  if (!['en', 'de'].includes(lang)) {
    return next('de');
  }

  if (i18n.locale !== lang) {
    i18n.locale = lang;
  }

  return next();
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');
