/*
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-21 09:14:53
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-24 13:03:49
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import entrancePage from '../views/entrancePage/entrancePage.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', meta: { name: '欢迎页' }, component: Home },
  { path: '/entrancePage', meta: { name: '数说定电' }, component: entrancePage },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.name;
  next();
});

export default router;
