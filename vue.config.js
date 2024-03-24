/*
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2023-04-23 10:50:51
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-21 09:29:17
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  transpileDependencies: true,
  lintOnSave: false,
});
