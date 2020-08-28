import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/de/impressum',
    component: () => import('../views/de/Imprint.vue'),
  },
  {
    path: '/en/impressum',
    component: () => import('../views/en/Imprint.vue'),
  },

  {
    path: '/de/agb',
    component: () => import('../views/de/TermCondition.vue'),
  },
  {
    path: '/en/agb',
    component: () => import('../views/en/TermCondition.vue'),
  },

  {
    path: '/de/datenschutzerklaerung',
    component: () => import('../views/de/PrivacyPolicy.vue'),
  },
  {
    path: '/en/datenschutzerklaerung',
    component: () => import('../views/en/PrivacyPolicy.vue'),
  },

  {
    path: '/:lang',
    component: {
      render: (h) => h('router-view'),
    },
    children: [
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
