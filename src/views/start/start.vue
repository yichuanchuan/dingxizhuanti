<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-29 19:51:57
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="entrancePage" @click="toEntrance">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle"></div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
export default {
  name: 'entrancePage',
  components: {
    customText,
    widgetImage,
    verticalText,
  },
  data() {
    return {
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
    };
  },
  methods: {
    toEntrance() {
      this.$router.push({
        path: '/weatherForecast',
      });
    },
    // 窗口变化
    onWindowResize() {
      let clientWidth = document.getElementsByClassName('devopsBigScreen')[0].clientWidth;
      let clientHeight = document.getElementsByClassName('devopsBigScreen')[0].clientHeight;
      const scale = Math.min(clientWidth / this.width, clientHeight / this.height);
      this.bigScreenStyle.transform = `scale(${scale}, ${scale})`;
    },
    setBigScreenStyle() {
      this.bigScreenStyle = {
        width: this.width + 'px',
        height: this.height + 'px',
        transform: `scale(1, 1)`,
        overflow: 'hidden',
        'background-image': 'url(' + require('./images/bg.png') + ')',
        'background-position': '0% 0%',
        'background-size': '100% 100%',
        'background-repeat': 'initial',
        'background-attachment': 'initial',
        'background-origin': 'initial',
        'background-clip': 'initial',
        'flex-shrink': 0,
      };
      this.onWindowResize();
    },
  },
  created() {},
  mounted() {
    this.setBigScreenStyle();
    window.addEventListener('resize', this.onWindowResize, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
};
</script>

<style lang="scss" scoped>
.entrancePage {
  width: 100%;
  height: 100%;
  .devopsBigScreen {
    background: #001f35;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
