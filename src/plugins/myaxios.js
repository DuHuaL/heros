import axios from 'axios';

const MyAxios = {};
MyAxios.install = function(Vue) {
  // 全局设置axios的baseURL，基地址只能有一个
  // axios.defaults.baseURL = 'http://localhost:3000';

  // 由于可能有不同的请求地址，所以此方法可以设置不同的基地址
  const instance = axios.create({
    baseURL: 'http://localhost:3000'
  });
  // const instance1 = axios.create({
  //   baseURL = 'http://localhost:8080'
  // });
  Vue.prototype.$http = instance;
  // Vue.prototype.$http1 = instance1;
};

export default MyAxios;
