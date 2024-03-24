<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-22 17:23:55
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 中间静态图片 -->
        <div class="center_image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
export default {
  name: 'footstone',
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
      textList: [
        {
          text: '培训期数',
          fontSize: 30,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '份数',
          fontSize: 30,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '覆盖率',
          fontSize: 30,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '5期',
          fontSize: 36,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#12E9D0',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '2100份',
          fontSize: 36,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#FCB52B',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '100%',
          fontSize: 36,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#19B4E8',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '基于数据运营支撑平台常态化开展数据质量监测%',
          fontSize: 30,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '覆盖公司全域核心业务场景',
          fontSize: 30,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '2023年，整改异动数据11686条，整改率99.8%。',
          fontSize: 30,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '制定《数据主人制推广实施》方案',
          fontSize: 32,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '运用CRUD矩阵梳理数据主责岗位',
          fontSize: 32,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '明确数据主人认责路径，选代更新',
          fontSize: 32,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '完成948类数据主人认定',
          fontSize: 32,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 335,
          left: 300,
          top: 204,
        },
      ],
    };
  },
  methods: {
    toRouter(path) {
      this.$router.push({
        path: path,
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
.footstone {
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
    .center_image {
      width: 2140px;
      height: 1194px;
      position: absolute;
      top: 332px;
      left: 978px;
      background: url('./images/center.png');
      background-size: 100% 100%;
    }
  }
}
</style>
