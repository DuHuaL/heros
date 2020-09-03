import axios from 'axios';

const MyAxios = {};
MyAxios.install = function(Vue) {
  // 全局设置axios的baseURL
  axios.defaults.baseURL = 'http://localhost:3000';
  Vue.prototype.$http = axios;
};

export default MyAxios;
