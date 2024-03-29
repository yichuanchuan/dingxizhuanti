<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2023-05-29 09:20:29
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-20 21:40:09
-->
<template>
  <div :id="'chart' + chartIndex" :style="transStyle"></div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'commonChart', // 公共组件
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    chartIndex: {
      type: Number,
      default: 0,
    },
    cssStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    transStyle: function () {
      return {
        position: 'absolute',
        width: this.cssStyle.width ? this.cssStyle.width + 'px' : '0px',
        height: this.cssStyle.height ? this.cssStyle.height + 'px' : '0px',
        left: this.cssStyle.left ? this.cssStyle.left + 'px' : '0px',
        top: this.cssStyle.top ? this.cssStyle.top + 'px' : '0px',
        zIndex: 9999999,
      };
    },
  },
  data() {
    return {
      chartDom: null,
    };
  },
  created() {},
  mounted() {
    // 实例化饼图dom
    this.chartDom = echarts.init(document.querySelector('#chart' + this.chartIndex), null, { renderer: 'svg' });
    //监听resize
    window.addEventListener('resize', this.changeChartSize);
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          this.clearOption();
          this.renderPie();
        });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    clearOption() {
      this.chartDom.clear();
    },
    //渲染饼图
    renderPie() {
      this.chartDom.setOption(this.option); //设置配置项,绘制pie
    },
    //改变chart大小
    changeChartSize() {
      this.chartDom.resize();
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeChartSize);
  },
};
</script>

<style lang="scss"></style>
