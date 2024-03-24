/*
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2023-05-04 07:06:52
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-21 11:23:24
 * @FilePath: \pingxiproject\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router.js';
import highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(highcharts);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
