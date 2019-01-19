import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


//YDUI自适应
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.rem.js';
import 'vue-ydui/dist/ydui.flexible.js';


//公共css文件
import './assets/css/public.css';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
