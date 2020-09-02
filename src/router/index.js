import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Heroslist from '@/components/heros/heroslist';
import Herosadd from '@/components/heros/herosadd';
import Herosedit from '@/components/heros/herosedit';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/heros', name: 'heros', component: Heroslist },
        { path: '/heros/add', name: 'herosadd', component: Herosadd },
        { path: '/heros/edit', name: 'herosedit', component: Herosedit }
      ]
    }
  ]
});
