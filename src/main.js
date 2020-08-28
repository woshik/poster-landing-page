import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import VueLazyload from 'vue-lazyload';
import './icon';

Vue.use(VueLazyload, {
  preLoad: 1,
  loading:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwN3B4IiBoZWlnaHQ9IjIwN3B4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgcj0iMTEiIHN0cm9rZS1kYXNoYXJyYXk9IjUxLjgzNjI3ODc4NDIzMTU4IDE5LjI3ODc1OTU5NDc0Mzg2Ij4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==',
  attempt: 1,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1,
  },
});

Vue.config.productionTip = false;

// routuing
router.beforeEach((to, from, next) => {
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
