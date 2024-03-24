<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-21 11:22:05
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-21 11:41:34
-->
<template>
  <div>
    <div :id="'HighCharts' + chartIndex" :option="option" :style="transStyle"></div>
  </div>
</template>

<script>
import HighCharts from 'highcharts';
export default {
  name: 'highCharts',
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
  data() {
    return {
      id: 'test',
    };
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
  methods: {},
  mounted() {
    HighCharts.chart('HighCharts' + this.chartIndex, this.option);
  },
};
</script>

<style scoped lang="scss"></style>
