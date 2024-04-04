<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/next.png" alt="" class="over_image" @click="$router.push({ path: '/over' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 右侧图片 -->
        <div class="right_image2"></div>
        <div class="right_image1"></div>
        <!-- 左侧图片 -->
        <div class="left_image1"></div>
        <div class="left_image2"></div>
        <div class="left_image3"></div>
        <div class="left_image4"></div>
        <div class="left_image5"></div>
        <div class="left_image6"></div>
        <!-- 左侧文本 -->
        <div class="left_text">
          <div>发明专利<span class="color_text">3项</span>、发表<span class="color_text">论文3篇</span></div>
          <div>在新华网、公司门户等发表<span class="color_text">新闻报道3篇</span></div>
          <div>2023年度甘肃省优秀质量管理小组<span class="color_text">二等奖</span></div>
          <div>国网甘肃省电力公司2023年大数据应用优秀成果集</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import commonCharts from '../../components/commonCharts.vue';
let echarts = require('echarts/lib/echarts'); //按需引入
export default {
  name: 'footstone',
  components: {
    customText,
    widgetImage,
    verticalText,
    commonCharts,
  },
  data() {
    return {
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
      textList: [
        {
          text: '多能低碳',
          fontSize: 80,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#DDEFFF',
          width: 300,
          left: 1378,
          top: 615,
        },
        {
          text: '多元互动',
          fontSize: 80,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#DDEFFF',
          width: 300,
          left: 2213,
          top: 615,
        },
        {
          text: '多点融合',
          fontSize: 80,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#DDEFFF',
          width: 300,
          left: 1398,
          top: 1373,
        },
        {
          text: '多边协同',
          fontSize: 80,
          fontFamily: 'yaoshe',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#DDEFFF',
          width: 300,
          left: 2203,
          top: 1373,
        },
        {
          text: '依托能源大数据应用支撑平台，以算法模型、数据应用等形式多渠道共享复用，助力区域分布式光伏稳步发展，建立可持续的清洁能源开发利用模式，助推实现“碳达峰、碳中和”战略目标。',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 956,
          left: 2761,
          top: 1136,
          lineHeight: 90,
          letterSpacing: 4
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
      width: 928px;
      height: 453px;
      position: absolute;
      top: 1536px;
      left: 2761px;
      background: url('./images/img.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.06);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .right_image2 {
      width: 966px;
      height: 534px;
      position: absolute;
      top: 324px;
      left: 2743px;
      background: url('./images/right.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.06);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_image1 {
      width: 428px;
      height: 536px;
      position: absolute;
      top: 331px;
      left: 168px;
      background: url('./images/img1.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.07);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_image2 {
      width: 428px;
      height: 536px;
      position: absolute;
      top: 331px;
      left: 626px;
      background: url('./images/img2.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.07);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_image3 {
      width: 428px;
      height: 536px;
      position: absolute;
      top: 897px;
      left: 168px;
      background: url('./images/img3.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.07);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_image4 {
      width: 428px;
      height: 536px;
      position: absolute;
      top: 897px;
      left: 626px;
      background: url('./images/img4.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.07);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_image5 {
      width: 428px;
      height: 536px;
      position: absolute;
      top: 1463px;
      left: 168px;
      background: url('./images/img5.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.07);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_image6 {
      width: 428px;
      height: 536px;
      position: absolute;
      top: 1463px;
      left: 626px;
      background: url('./images/img6.png');
      transition: transform 0.3s;

      /* 添加过渡效果 */
      &:hover {
        transform: scale(1.07);
        /* 在悬停时放大 1.06 倍 */
      }
    }

    .left_text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 36px;
      color: #bce3ff;
      line-height: 70px;
      position: absolute;
      top: 1750px;
      left: 1289px;
      width: 1203px;
      text-align: left;
      letter-spacing: 16px;
    }

    .color_text {
      color: #fcb52b;
    }
  }
}
</style>
