<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/next.png" alt="" class="over_image" @click="$router.push({ path: '/weatherForecast' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 右上图片 -->
        <div class="right_img"></div>
        <!-- 左上图片 -->
        <div class="left_map"></div>
        <!-- 左侧文本 -->
        <div class="left_text">
          <span class="big_text" style="margin-right: 10px">定西</span
          >光伏能源相对富集，
          <span class="sm_text">10千伏</span>及以下并网光伏容量 <span class="sm_text">208MW</span>，位列全省第一。按照国家能源局和甘肃省发改委
          <span class="sm_text">“3+10+X”</span>整县分布式光伏建设框架，定西最终装机规模将达到
          <span class="sm_text">700MW</span>。
        </div>
        <!-- 中部文本 -->
        <div class="text text1">数据预处理：历史数据<span class="color_text">可信度</span>提升至<span class="color_text">99.87%</span></div>
        <div class="text text2">典型因子研究：气象要素、设备参数、典型地貌等<span class="color_text">14个</span>影响因子</div>
        <div class="text text3">数据网格化：降尺度模型获取<span class="color_text">3*3Km</span>网格化气象预报数据</div>
        <div class="text text4">区域建模：构建基于不同时空特征的模型<span class="color_text">9个</span></div>
        <div class="text text5">
          模型融合：短时<span class="color_text">（0-4h）</span>模型<span class="color_text"
            >自适应融合修正</span
          >
        </div>
        <!-- 中下文本 -->
        <div class="right_text">
          分布式光伏功率预测场景，充分发挥数据中台优势，实现跨专业、跨系统分布式光伏全量数据接入，构建分布式光伏功率预测模型，开展功率精准预测，搭建具备站点概览、气象监测、功率预测、误差分析四类功能的监测凭条。
        </div>
        <!-- 中下图片 -->
        <div class="right_img1"></div>
        <!-- 左下图片 -->
        <div class="right_img2"></div>
        <div class="right_img3"></div>
        <div class="right_img4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
let echarts = require('echarts/lib/echarts'); //按需引入
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
          text: '项目背景',
          fontSize: 36,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 150,
          left: 188,
          top: 202,
        },
        {
          text: '总体思路',
          fontSize: 36,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 150,
          left: 1312,
          top: 1283,
        },
        {
          text: '模型搭建',
          fontSize: 36,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 150,
          left: 2792,
          top: 196,
        },
        {
          text: '四大场景',
          fontSize: 70,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#FCB52B',
          width: 300,
          left: 1799,
          top: 411,
        },
        {
          text: '站点 概览',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 80,
          left: 1283,
          top: 502,
          lineHeight: 70
        },
        {
          text: '功率 预测',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 80,
          left: 2112,
          top: 871,
          lineHeight: 70
        },
        {
          text: '误差 分析',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 80,
          left: 2465,
          top: 502,
          lineHeight: 70
        },
        {
          text: '气象 监测',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 80,
          left: 1639,
          top: 865,
          lineHeight: 70
        },
        {
          text: '01',
          fontSize: 70,
          fontFamily: 'zaozi',
          fontWeight: 400,
          textAlign: 'left',
          color: '#DDEFFF',
          width: 52,
          left: 1463,
          top: 545,
        },
        {
          text: '02',
          fontSize: 70,
          fontFamily: 'zaozi',
          fontWeight: 400,
          textAlign: 'left',
          color: '#DDEFFF',
          width: 80,
          left: 1639,
          top: 700,
        },
        {
          text: '03',
          fontSize: 70,
          fontFamily: 'zaozi',
          fontWeight: 400,
          textAlign: 'left',
          color: '#DDEFFF',
          width: 80,
          left: 2112,
          top: 700,
        },
        {
          text: '04',
          fontSize: 70,
          fontFamily: 'zaozi',
          fontWeight: 400,
          textAlign: 'left',
          color: '#DDEFFF',
          width: 79,
          left: 2304,
          top: 545,
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
    .right_image1 {
      width: 198px;
      height: 252px;
      position: absolute;
      top: 490px;
      left: 3316px;
      background: url('./images/img.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
    .left_map {
      width: 689px;
      height: 544px;
      position: absolute;
      top: 284px;
      left: 212px;
      background: url('./images/map.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.05); /* 在悬停时放大 1.1 倍 */
      }
    }
    .left_text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #7bb3e6;
      line-height: 70px;
      position: absolute;
      top: 818px;
      left: 120px;
      width: 990px;
      text-align: left;
      letter-spacing: 3px;
    }
    .right_text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 30px;
      color: #7bb3e6;
      line-height: 70px;
      text-align: left;
      position: absolute;
      top: 1331px;
      left: 1285px;
      width: 1270px;
    }
    .big_text {
      font-weight: 500;
      font-size: 40px;
      color: #fcb52b;
      font-family: PingFangSC, PingFang SC;
    }
    .sm_text {
      font-weight: 500;
      font-size: 30px;
      color: #fcb52b;
      font-family: PingFangSC, PingFang SC;
    }
    .color_text {
      color: #fcb52b;
    }
    .text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 34px;
      color: #7bb3e6;
      text-align: left;
      position: absolute;
      left: 2835px;
      width: 875px;
    }
    .text1 {
      top: 1380px;
    }
    .text2 {
      top: 1470px;
    }
    .text3 {
      top: 1622px;
      width: 790px;
    }
    .text4 {
      top: 1782px;
    }
    .text5 {
      top: 1886px;
    }
    .right_img {
      width: 880px;
      height: 879px;
      position: absolute;
      top: 218px;
      left: 2787px;
      background: url('./images/right.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.08); /* 在悬停时放大 1.1 倍 */
      }
    }
    .right_img1 {
      width: 1270px;
      height: 420px;
      position: absolute;
      top: 1584px;
      left: 1285px;
      background: url('./images/img1.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.08); /* 在悬停时放大 1.1 倍 */
      }
    }
    .right_img2 {
      width: 824px;
      height: 324px;
      position: absolute;
      top: 1291px;
      left: 213px;
      background: url('./images/img2.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
    .right_img3 {
      width: 387px;
      height: 367px;
      position: absolute;
      top: 1665px;
      left: 213px;
      background: url('./images/img3.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
    .right_img4 {
      width: 387px;
      height: 367px;
      position: absolute;
      top: 1665px;
      left: 650px;
      background: url('./images/img4.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
  }
}
</style>
