<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-23 09:57:45
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 照片墙 -->
        <div class="image_box">
          <div v-for="item in imageList" :key="item" :class="['image_item', `item${item}`]"></div>
        </div>
        <!-- 右侧图片 -->
        <div class="right_image1"></div>
        <div class="right_image2"></div>
        <div class="right_image3"></div>
        <!-- 底部轮播组件 -->
        <carouselBoxVue> </carouselBoxVue>
        <!-- 右下角echarts -->
        <commonCharts :option="chartOption" :chartIndex="0" :cssStyle="chartCssStyle"></commonCharts>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import carouselBoxVue from './components/carouselBox.vue';
import commonCharts from '../../components/commonCharts.vue';
let echarts = require('echarts/lib/echarts'); //按需引入
export default {
  name: 'footstone',
  components: {
    customText,
    widgetImage,
    verticalText,
    carouselBoxVue,
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
          text: '培训期数',
          fontSize: 30,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 140,
          left: 193,
          top: 398,
        },
        {
          text: '份数',
          fontSize: 30,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 100,
          left: 513,
          top: 398,
        },
        {
          text: '覆盖率',
          fontSize: 30,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 140,
          left: 777,
          top: 398,
        },
        {
          text: '5期',
          fontSize: 36,
          fontWeight: 'bold',
          textAlign: 'left',
          color: '#12E9D0',
          width: 100,
          left: 210,
          top: 445,
          textShadow: '0px 0px 8px rgba(18, 233, 208, 0.8)',
        },
        {
          text: '2100份',
          fontSize: 36,
          fontWeight: 'bold',
          textAlign: 'left',
          color: '#FCB52B',
          width: 150,
          left: 460,
          top: 445,
          textShadow: '0px 0px 8px rgba(252, 181, 43, 0.8)',
        },
        {
          text: '100%',
          fontSize: 36,
          fontWeight: 'bold',
          textAlign: 'left',
          color: '#19B4E8',
          width: 100,
          left: 776,
          top: 445,
          textShadow: '0px 0px 8px rgba(25, 180, 232, 0.8)',
        },
        {
          text: '基于数据运营支撑平台常态化开展数据质量监测',
          fontSize: 30,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 665,
          left: 186,
          top: 1616,
        },
        {
          text: '覆盖公司全域核心业务场景',
          fontSize: 30,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 665,
          left: 186,
          top: 1684,
        },
        {
          text: '2023年，整改异动数据11686条，整改率99.8%。',
          fontSize: 30,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 700,
          left: 186,
          top: 1750,
        },
        {
          text: '制定《数据主人制推广实施》方案',
          fontSize: 32,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 490,
          left: 3215,
          top: 424,
        },
        {
          text: '运用CRUD矩阵梳理数据主责岗位',
          fontSize: 32,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 490,
          left: 3215,
          top: 828,
        },
        {
          text: '明确数据主人认责路径，选代更新',
          fontSize: 32,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 490,
          left: 3215,
          top: 1124,
        },
        {
          text: '完成948类数据主人认定',
          fontSize: 32,
          fontFamily: 'siyuan',
          fontWeight: 500,
          textAlign: 'left',
          color: '#CDEEFF',
          width: 472,
          left: 3215,
          top: 1498,
        },
        {
          text: '数据智治',
          fontSize: 80,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(255, 210, 0, 1)',
          width: 300,
          left: 1890,
          top: 620,
        },
        {
          text: '立规范',
          fontSize: 56,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(255, 210, 0, 1)',
          width: 200,
          left: 1220,
          top: 827,
        },
        {
          text: '定责任',
          fontSize: 56,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(255, 210, 0, 1)',
          width: 200,
          left: 2690,
          top: 846,
        },
        {
          text: '定责任',
          fontSize: 56,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(255, 210, 0, 1)',
          width: 200,
          left: 2690,
          top: 846,
        },
        {
          text: '安全有数',
          fontSize: 66,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(107, 233, 251, 1)',
          width: 300,
          left: 1176,
          top: 980,
        },
        {
          text: '智治有人',
          fontSize: 66,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(107, 233, 251, 1)',
          width: 300,
          left: 2646,
          top: 980,
        },
        {
          text: '智治有方',
          fontSize: 66,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgba(107, 233, 251, 1)',
          width: 300,
          left: 1924,
          top: 1217,
        },
      ],
      imageList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      chartCssStyle: {
        width: 451,
        height: 266,
        top: 1571,
        left: 3203,
      },
      chartOption: {
        title: {
          text: '数据主人认定数量',
          left: 'center',
          textStyle: {
            color: 'rgba(188, 227, 255, 1)',
            fontSize: 18,
          },
        },
        grid: {
          top: '20',
          left: '20',
          bottom: '20',
          right: '20',
          containLabel: true,
        },
        tooltip: {
          show: true,
        },
        animation: false,
        xAxis: [
          {
            type: 'category',
            data: ['生产数据主人', '业务数据主人', '数据管家'],
            axisTick: {
              show: false,
            },
            nameTextStyle: {
              color: '#82b0ec',
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(55, 134, 187, 1)',
              },
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(139, 187, 221, 1)',
                fontSize: 16,
              },
              margin: 30,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: 'rgba(139, 187, 221, 1)',
                fontSize: 16,
              },
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(55, 134, 187, 1)',
              },
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6], // 上部椭圆
            symbolPosition: 'end',
            z: 12,
            barWidth: '40',
            label: {
              normal: {
                show: true,
                position: 'top',
                fontSize: 12,
                color: '#fff',
              },
            },
            color: 'rgba(161, 47, 122, 1)',
            data: [580, 78, 120],
          },
          {
            type: 'bar',
            //silent: true,
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: 'rgba(252, 77, 211, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 176, 118, 1)',
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: [580, 78, 120],
          },
        ],
      },
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

    .image_box {
      width: 798px;
      height: 764px;
      position: absolute;
      top: 528px;
      left: 134px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 24px;
      .image_item {
        width: 258px;
        height: 280px;
        background-size: '100% 100%';
        transition: transform 0.3s; /* 添加过渡效果 */
        &:hover {
          transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
        }
      }
      .item0 {
        background: url('./images/img1.png');
      }
      .item1 {
        background: url('./images/img2.png');
      }
      .item2 {
        background: url('./images/img3.png');
      }
      .item3 {
        background: url('./images/img4.png');
      }
      .item4 {
        background: url('./images/img5.png');
      }
      .item5 {
        background: url('./images/img6.png');
      }
      .item6 {
        background: url('./images/img7.png');
      }
      .item7 {
        background: url('./images/img8.png');
      }
      .item8 {
        background: url('./images/img9.png');
      }
    }
    .right_image1 {
      width: 198px;
      height: 252px;
      position: absolute;
      top: 490px;
      left: 3316px;
      background: url('./images/right1.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
    .right_image2 {
      width: 426px;
      height: 148px;
      position: absolute;
      top: 894px;
      left: 3234px;
      background: url('./images/right2.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
    .right_image3 {
      width: 418px;
      height: 202px;
      position: absolute;
      top: 1191px;
      left: 3235px;
      background: url('./images/right3.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.1); /* 在悬停时放大 1.1 倍 */
      }
    }
  }
}
</style>
