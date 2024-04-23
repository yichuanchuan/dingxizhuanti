<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/next.png" alt="" class="over_image" @click="$router.push({ path: '/errorAnalysis' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 左侧文本 -->
        <div class="text text1">1.选取功率预测<span class="color_text">影响典型因子</span>，使用灰色关联度和余弦相似度算法进行集成，构建<span class="color_text">相似时刻模型</span>。</div>
        <div class="text text2">2.结合时序理论，采用时序差分、滑动窗口等方式构建时序特征和离散特征。</div>
        <div class="text text3">3.结合站点容量、气象条件等多方要素，使用<span class="color_text">XGBOOST集成算法</span>构建功率预测模型。</div>
        <!-- 右侧图片 -->
        <div class="right_image1"></div>
        <!-- 右下角echarts -->
        <commonCharts :option="chartOption" :chartIndex="0" :cssStyle="chartCssStyle"></commonCharts>
        <!-- 表格1 -->
        <div class="prediction prediction1">
          <div
            class="prediction_item"
            v-for="(item, index) in predictionList1"
            :key="index"
            :style="{ borderBottom: `${index == predictionList1.length - 1 ? '' : '1px solid #3F5B6F'}` }"
          >
            <div class="prediction_item_text" v-for="(it, idx) in item" :key="idx" :style="it">{{ it.text }}</div>
          </div>
        </div>
        <!-- 表格2 -->
        <div class="prediction prediction2">
          <div
            class="prediction_item"
            v-for="(item, index) in predictionList2"
            :key="index"
            :style="{ borderBottom: `${index == predictionList2.length - 1 ? '' : '1px solid #3F5B6F'}` }"
          >
            <div class="prediction_item_text" v-for="(it, idx) in item" :key="idx" :style="it">{{ it.text }}</div>
          </div>
        </div>
        <!-- 表格3 -->
        <div class="prediction prediction3">
          <div
            class="prediction_item"
            v-for="(item, index) in predictionList3"
            :key="index"
            :style="{ borderBottom: `${index == predictionList3.length - 1 ? '' : '1px solid #3F5B6F'}` }"
          >
            <div class="prediction_item_text" v-for="(it, idx) in item" :key="idx" :style="it">{{ it.text }}</div>
          </div>
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
          text: '功率预测',
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
          text: '精准构建预测模型',
          fontSize: 50,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#7BB3E6',
          width: 400,
          left: 154,
          top: 360,
        },
      ],
      chartCssStyle: {
        width: 1400,
        height: 660,
        top: 1400,
        left: 2340,
      },
      chartOption: {
        backgroundColor: 'transparent',
        grid: {
          left: '8%',
          right: '8%',
          bottom: '14%',
          top: '16%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: false,
            },
          },
          textStyle: {
            align: 'left',
          },
        },
        legend: {
          data: ['预测功率', '实际功率'],
          // right: 10,
          top: 15,
          textStyle: {
            color: '#BCE3FF',
            fontSize: 22,
          },
          itemWidth: 40,
          itemHeight: 18,
          itemStyle: {
            // 设置图例标记的样式
            color: 'transparent', // 颜色
          },
          itemGap: 35,
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-04-10 20:00',
            '2024-04-11 00:00',
            '2024-04-11 04:00',
            '2024-04-11 08:00',
            '2024-04-11 12:00',
            '2024-04-11 16:00',
            '2024-04-11 20:00',
            '2024-04-12 00:00',
            '2024-04-12 04:00',
            '2024-04-12 08:00',
            '2024-04-12 12:00',
            '2024-04-12 16:00',
            '2024-04-12 20:00',
            '2024-04-13 00:00',
            '2024-04-13 04:00',
            '2024-04-13 08:00',
            '2024-04-13 12:00',
            '2024-04-13 16:00',
            '2024-04-13 20:00',
          ],
          axisLine: {
            show: true,
            // onZero: false,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2,
            },
          },
          axisLabel: {
            interval: 5,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF',
            },
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          max: '3000',
          splitNumber: 6,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
              type: 'dashed', // ! 网格虚线设置
            },
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22,
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2,
            },
          },
        },
        series: [
          {
            name: '实际功率',
            data: [0, 0, 2600, 0.15, 0.44, 1068.29, 80.74, 0, 2400, 0, 0, 0, 2200, 0, 0, 0, 2400, 0, 0],
            type: 'line',
            smooth: true, // 可选，平滑线
            symbol: 'none',
            itemStyle: {
              normal: {
                color: 'rgba(0, 233, 255, 1)', // 折线颜色
              },
            },
            symbolSize: 10,
          },
          {
            name: '预测功率',
            data: [0, 200, 2500, 0.16, 0.44, 1139.67, 100.45, 50, 2300, 50, 50, 50, 2300, 50, 50, 50, 2300, 0, 0],
            type: 'line',
            smooth: true, // 可选，平滑线
            symbol: 'none',
            itemStyle: {
              normal: {
                color: 'rgba(255, 85, 169, 1)', // 折线颜色
              },
            },
            symbolSize: 10,
          },
        ],
      },
      predictionList1: [
        [
          {
            text: '时间',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '00:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '01:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '02:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '03:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '04:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '05:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '06:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '07:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '预测功率(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '0.16',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.16',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.44',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.46',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '实际功率(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.15',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.44',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.45',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
      ],
      predictionList2: [
        [
          {
            text: '时间',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '08:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '09:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '10:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '11:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '12:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '13:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '14:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '15:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '预测功率(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '13.17',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '245.32',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '511.09',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '827',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1139.67',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1587.55',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1609.01',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1397.72',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '实际功率(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '11.2',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '269.21',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '498.14',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '793.36',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1068.29',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1518.68',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1597.59',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1387.86',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
      ],
      predictionList3: [
        [
          {
            text: '时间',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '16:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '17:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '19:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '20:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '21:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '22:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '23:00',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '预测功率(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '959.23',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '557.95',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '100.45',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '5.08',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.47',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.17',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.17',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.16',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '实际功率(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '972.1',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '541.77',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.74',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '4.86',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.45',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.17',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.17',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.17',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '213px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
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
    .left_text {
      width: 1065px;
      height: 800px;
      position: absolute;
      top: 322px;
      left: 154px;
      font-weight: 500;
      font-size: 50px;
      color: #7bb3e6;
      line-height: 100px;
    }
    .right_image1 {
      width: 2410px;
      height: 644px;
      position: absolute;
      top: 400px;
      left: 1276px;
      background: url('./images/img.png');
      transition: transform 0.3s; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.04); /* 在悬停时放大 1.04 倍 */
      }
    }
    .prediction {
      position: absolute;
      width: 2072px;
      height: 176px;
      background: url('./images/table.png');
      .prediction_item {
        display: flex;
        .prediction_item_text {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 58px;
        }
      }
    }
    .prediction1 {
      top: 1434px;
      left: 160px;
    }
    .prediction2 {
      top: 1646px;
      left: 160px;
    }
    .prediction3 {
      top: 1858px;
      left: 160px;
    }
    .color_text {
      color: #fcb52b;
    }
    .text {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 40px;
      color: #7BB3E6;
      text-align: left;
      line-height: 100px;
      position: absolute;
      left: 154px;
      width: 1065px;
    }
    .text1 {
      top: 466px;
    }
    .text2 {
      top: 666px;
    }
    .text3 {
      top: 866px;
    }
  }
}
</style>
