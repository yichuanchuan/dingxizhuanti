/*
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-21 09:14:53
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-29 21:27:43
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import weather from '../views/weather/weather.vue';
import weatherForecast from '../views/weatherForecast/weatherForecast.vue';
import introduction from '../views/introduction/introduction.vue';
import scene from '../views/scene/scene.vue';
import patent from '../views/patent/patent.vue';
import database from '../views/database/database.vue';
import errorAnalysis from '../views/errorAnalysis/errorAnalysis.vue';
import start from '../views/start/start.vue';
import over from '../views/over/over.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', meta: { name: '误差分析' }, component: start },
  { path: '/weather', meta: { name: '天气' }, component: weather },
  { path: '/weatherForecast', meta: { name: '天气预报' }, component: weatherForecast },
  { path: '/introduction', meta: { name: '简介' }, component: introduction },
  { path: '/scene', meta: { name: '四大场景' }, component: scene },
  { path: '/patent', meta: { name: '专利成果' }, component: patent },
  { path: '/database', meta: { name: '数据站点' }, component: database },
  { path: '/errorAnalysis', meta: { name: '误差分析' }, component: errorAnalysis },
  { path: '/over', meta: { name: '误差分析' }, component: over },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.name;
  next();
});

export default router;
