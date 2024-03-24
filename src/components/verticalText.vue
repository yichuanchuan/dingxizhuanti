<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2023-10-11 12:19:09
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-21 10:29:47
-->
<template>
  <div :style="transStyle">{{ options.text }}</div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: {},
    },
  },
  name: 'verticalText', // 竖文本
  computed: {
    transStyle: function () {
      return {
        fontSize: this.options.fontSize ? this.options.fontSize + 'px' : '14px',
        color: this.options.color ? this.options.color : '#c9d6ff',
        position: 'absolute',
        left: this.options.left ? this.options.left + 'px' : '0px',
        top: this.options.top ? this.options.top + 'px' : '0px',
        width: this.options.width ? this.options.width + 'px' : 'auto',
        textAlign: this.options.textAlign ? this.options.textAlign : 'center',
        fontWeight: this.options.fontWeight ? this.options.fontWeight : 400,
        zIndex: this.options.zIndex ? this.options.zIndex : 1,
        fontFamily: this.options.fontFamily,
        writingMode: 'vertical-rl', //从上到下书写
        textOrientation: 'upright', //竖排文字正向显示
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
