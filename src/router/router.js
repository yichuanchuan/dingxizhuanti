/*
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-21 09:14:53
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-22 17:12:33
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import entrancePage from '../views/entrancePage/entrancePage.vue';
import footstone from '../views/footstone/footstone.vue';
import aWall from '../views/aWall/aWall.vue';
import weather from '../views/weather/weather.vue';
import weatherForecast from '../views/weatherForecast/weatherForecast.vue';
import introduction from '../views/introduction/introduction.vue';
import scene from '../views/scene/scene.vue';
import patent from '../views/patent/patent.vue';
import database from '../views/database/database.vue';
import errorAnalysis from '../views/errorAnalysis/errorAnalysis.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', meta: { name: '欢迎页' }, component: Home },
  { path: '/entrancePage', meta: { name: '数说定电' }, component: entrancePage },
  { path: '/footstone', meta: { name: '基石' }, component: footstone },
  { path: '/aWall', meta: { name: '一面墙' }, component: aWall },
  { path: '/weather', meta: { name: '天气' }, component: weather },
  { path: '/weatherForecast', meta: { name: '天气预报' }, component: weatherForecast },
  { path: '/introduction', meta: { name: '简介' }, component: introduction },
  { path: '/scene', meta: { name: '四大场景' }, component: scene },
  { path: '/patent', meta: { name: '专利成果' }, component: patent },
  { path: '/database', meta: { name: '数据站点' }, component: database },
  { path: '/errorAnalysis', meta: { name: '误差分析' }, component: errorAnalysis },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.name;
  next();
});

export default router;
