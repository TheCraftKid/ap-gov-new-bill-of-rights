import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Presentation from './views/Presentation.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: Presentation,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
