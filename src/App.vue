<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2023-04-23 10:50:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-20 22:45:31
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.back_image {
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  opacity: 0;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
}
</style>
