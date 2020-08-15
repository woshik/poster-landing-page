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
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
  { path: '/', redirect: '/de' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
