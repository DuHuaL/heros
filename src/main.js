// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// 原始写法
// import axios from 'axios';
// 插件使用
import MyAxios from '@/plugins/myaxios';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.css';
Vue.config.productionTip = false;
Vue.use(ElementUI);
// 原始写法
// Vue.prototype.$http = axios;
Vue.use(MyAxios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
