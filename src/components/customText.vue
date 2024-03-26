<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2023-10-11 12:19:09
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-22 19:18:37
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
  name: 'customText', // 文本
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
        letterSpacing: this.options.letterSpacing + 'px' ? this.options.letterSpacing + 'px' : '0',
        textShadow: this.options.textShadow ? this.options.textShadow : '',
        lineHeight: this.options.lineHeight ? this.options.lineHeight + 'px' : '',
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
