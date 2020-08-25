import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:lang',
    component: {
      render: (h) => h('router-view'),
    },
    children: [
      {
        path: 'impressum',
        name: 'impressum',
        component: () => import('../views/Imprint.vue'),
      },
      {
        path: 'agb',
        name: 'agb',
        component: () => import('../views/TermCondition.vue'),
      },
      {
        path: 'datenschutzerklaerung',
        name: 'datenschutzerklaerung',
        component: () => import('../views/PrivacyPolicy.vue'),
      },
      {
        path: 'versand',
        name: 'versand',
        component: () => import('../views/ShippingPayment.vue'),
      },
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
