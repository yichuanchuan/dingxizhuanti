<template>
  <div class="weather">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 返回 -->
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/next.png" alt="" class="over_image" @click="$router.push({ path: '/introduction' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 湿度echarts -->
        <commonCharts :option="chartOption" :chartIndex="0" :cssStyle="chartCssStyle"></commonCharts>
        <!-- 温度echarts -->
        <commonCharts :option="chartOption1" :chartIndex="1" :cssStyle="chartCssStyle1"></commonCharts>
        <!-- 风速echarts -->
        <commonCharts :option="chartOption2" :chartIndex="2" :cssStyle="chartCssStyle2"></commonCharts>
        <!-- 风向echarts -->
        <commonCharts :option="chartOption3" :chartIndex="3" :cssStyle="chartCssStyle3"></commonCharts>
        <!-- 大气压echarts -->
        <commonCharts :option="chartOption4" :chartIndex="4" :cssStyle="chartCssStyle4"></commonCharts>
        <!-- 降雨量echarts -->
        <commonCharts :option="chartOption5" :chartIndex="5" :cssStyle="chartCssStyle5"></commonCharts>
        <!-- 温度-湿度echarts -->
        <commonCharts :option="chartOption6" :chartIndex="6" :cssStyle="chartCssStyle6"></commonCharts>
        <!-- 风速-风向echarts -->
        <commonCharts :option="chartOption7" :chartIndex="7" :cssStyle="chartCssStyle7"></commonCharts>
        <!-- 大气压-降雨量echarts -->
        <commonCharts :option="chartOption8" :chartIndex="8" :cssStyle="chartCssStyle8"></commonCharts>
        <!-- 气象监测数据表格 -->
        <div class="prediction">
          <div
            class="prediction_item"
            v-for="(item, index) in predictionList"
            :key="index"
            :style="{ borderBottom: `${index == predictionList.length - 1 ? '' : '1px solid #3F5B6F'}` }"
          >
            <div class="prediction_item_text" v-for="(it, idx) in item" :key="idx" :style="it">{{ it.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import commonCharts from '../../components/commonCharts.vue';
let echarts = require('echarts/lib/echarts'); //按需引入
export default {
  name: 'weather',
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
          text: '日期：2024-05-12',
          fontSize: 28,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 'normal',
          textAlign: 'left',
          color: '#7BB3E6',
          width: 400,
          left: 3460,
          top: 1350,
        },
      ],
      predictionList: [
        [
          {
            text: '温度(°C)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '湿度(%)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '风向',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '大气压(hPa)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '风力等级',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '风速(m/s)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '降雨量(mm)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '总辐射(W/m2)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '散辐射(W/m2)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '直辐射(W/m2)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '日期',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.54',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.81',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.81',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.04',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:48:33',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.55',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.67',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.04',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:47:30',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.58',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.79',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.05',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:46:27',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.65',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.67',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.4',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.05',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:45:21',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.64',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.76',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.06',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:44:18',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.68',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.48',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.4',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.06',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:43:16',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.71',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.61',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.07',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:42:13',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.71',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.45',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.09',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:41:10',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '1.72',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px',
          },
          {
            text: '53.6',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.09',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '18:40:04',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
      ],
      imageList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      chartCssStyle: {
        width: 1060,
        height: 450,
        top: 320,
        left: 164,
      },
      chartOption: {
        backgroundColor: 'transparent',
        title: {
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          top: '5%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '14%',
          top: '16%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-05-10 20:00',
            '2024-05-10 21:00',
            '2024-05-10 22:00',
            '2024-05-10 23:00',
            '2024-05-11 00:00',
            '2024-05-11 01:00',
            '2024-05-11 02:00',
            '2024-05-11 03:00',
            '2024-05-11 04:00',
            '2024-05-11 05:00',
            '2024-05-11 06:00',
            '2024-05-11 07:00',
            '2024-05-11 08:00',
            '2024-05-11 09:00',
            '2024-05-11 10:00',
            '2024-05-11 11:00',
            '2024-05-11 12:00',
            '2024-05-11 13:00',
            '2024-05-11 14:00',
            '2024-05-11 15:00',
            '2024-05-11 16:00',
            '2024-05-11 17:00',
            '2024-05-11 18:00',
            '2024-05-11 19:00',
            '2024-05-11 20:00',
          ],
          offset: 20,
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 11,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF',
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
        yAxis: {
          name: '',
          type: 'value',
          max: '60',
          axisLine: {
            show: false,
          },
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
          position: 'left',
        },
        series: [
          {
            name: '湿度',
            type: 'bar',
            barWidth: '20px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#89D470',
                  },
                  {
                    offset: 1,
                    color: '#0FBCB6',
                  },
                ]),
                barBorderRadius: 20,
              },
            },
            data: [50, 55, 48, 40, 38, 35, 35, 36, 40, 32, 32, 30, 33, 35, 37, 43, 47, 45, 45, 42, 39, 38, 36, 38, 36],
          },
        ],
      },
      chartCssStyle1: {
        width: 1060,
        height: 450,
        top: 320,
        left: 1370,
      },
      chartOption1: {
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
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-05-10 20:00',
            '2024-05-10 21:00',
            '2024-05-10 22:00',
            '2024-05-10 23:00',
            '2024-05-11 00:00',
            '2024-05-11 01:00',
            '2024-05-11 02:00',
            '2024-05-11 03:00',
            '2024-05-11 04:00',
            '2024-05-11 05:00',
            '2024-05-11 06:00',
            '2024-05-11 07:00',
            '2024-05-11 08:00',
            '2024-05-11 09:00',
            '2024-05-11 10:00',
            '2024-05-11 11:00',
            '2024-05-11 12:00',
            '2024-05-11 13:00',
            '2024-05-11 14:00',
            '2024-05-11 15:00',
            '2024-05-11 16:00',
            '2024-05-11 17:00',
            '2024-05-11 18:00',
            '2024-05-11 19:00',
            '2024-05-11 20:00',
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
            interval: 11,
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
          max: '16',
          min: '10',
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
            show: false,
          },
        },
        series: [
          {
            data: [15, 14.2, 13.3, 12.8, 12.3, 12, 11.7, 11.6, 11.6, 11.4, 11.2, 11.3, 11.4, 12, 12.9, 13.6, 14.3, 15, 15.3, 15.2, 14.3, 13.8, 13.3],
            type: 'line',
            smooth: true, // 可选，平滑线
            symbol: 'circle',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 154, 193, 0)',
                },
                {
                  offset: 1,
                  color: 'rgba(255, 97, 142, 0.28)',
                },
              ]),
              origin: 'end',
            },
            itemStyle: {
              normal: {
                color: '#FF618E', // 折线颜色
              },
            },
            symbolSize: 10,
          },
        ],
      },
      chartCssStyle2: {
        width: 1060,
        height: 450,
        top: 320,
        left: 2590,
      },
      chartOption2: {
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
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-05-10 20:00',
            '2024-05-10 21:00',
            '2024-05-10 22:00',
            '2024-05-10 23:00',
            '2024-05-11 00:00',
            '2024-05-11 01:00',
            '2024-05-11 02:00',
            '2024-05-11 03:00',
            '2024-05-11 04:00',
            '2024-05-11 05:00',
            '2024-05-11 06:00',
            '2024-05-11 07:00',
            '2024-05-11 08:00',
            '2024-05-11 09:00',
            '2024-05-11 10:00',
            '2024-05-11 11:00',
            '2024-05-11 12:00',
            '2024-05-11 13:00',
            '2024-05-11 14:00',
            '2024-05-11 15:00',
            '2024-05-11 16:00',
            '2024-05-11 17:00',
            '2024-05-11 18:00',
            '2024-05-11 19:00',
            '2024-05-11 20:00',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2,
            },
          },
          axisLabel: {
            interval: 11,
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
          max: '20',
          min: '0',
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
            show: false,
          },
        },
        series: [
          {
            data: [12.5, 16.5, 13.4, 11.4, 12.6, 10, 8, 6.5, 8.1, 8.5, 9.1, 13, 15, 17, 17, 20, 16.5, 18, 18, 19, 16, 18, 16, 14, 13],
            type: 'line',
            // smooth: true, // 可选，平滑线
            symbol: 'none',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(252, 234, 54, 0.28)',
                },
                {
                  offset: 1,
                  color: 'rgba(254, 234, 47, 0)',
                },
              ]),
              origin: 'start',
            },
            itemStyle: {
              normal: {
                color: '#FEEA31', // 折线颜色
              },
            },
            symbolSize: 10,
          },
        ],
      },
      chartCssStyle3: {
        width: 1060,
        height: 450,
        top: 805,
        left: 164,
      },
      chartOption3: {
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
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-05-10 20:00',
            '2024-05-10 21:00',
            '2024-05-10 22:00',
            '2024-05-10 23:00',
            '2024-05-11 00:00',
            '2024-05-11 01:00',
            '2024-05-11 02:00',
            '2024-05-11 03:00',
            '2024-05-11 04:00',
            '2024-05-11 05:00',
            '2024-05-11 06:00',
            '2024-05-11 07:00',
            '2024-05-11 08:00',
            '2024-05-11 09:00',
            '2024-05-11 10:00',
            '2024-05-11 11:00',
            '2024-05-11 12:00',
            '2024-05-11 13:00',
            '2024-05-11 14:00',
            '2024-05-11 15:00',
            '2024-05-11 16:00',
            '2024-05-11 17:00',
            '2024-05-11 18:00',
            '2024-05-11 19:00',
            '2024-05-11 20:00',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2,
            },
          },
          axisLabel: {
            interval: 11,
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
          max: '360',
          splitNumber: 9,
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
            show: false,
          },
        },
        series: [
          {
            data: [280, 280, 290, 300, 280, 300, 330, 350, 340, 290, 330, 330, 310, 290, 290, 280, 280, 280, 340, 330, 320, 290, 330, 350],
            type: 'line',
            // smooth: true, // 可选，平滑线
            symbol: 'triangle',
            symbolSize: 14,
            itemStyle: {
              normal: {
                color: 'rgba(235, 94, 0, 1)', // 折线颜色
              },
            },
            lineStyle: {
              color: '#5c69e5',
            },
          },
        ],
      },
      chartCssStyle4: {
        width: 1060,
        height: 450,
        top: 805,
        left: 1370,
      },
      chartOption4: {
        backgroundColor: 'transparent',
        grid: {
          left: '4.5%',
          right: '8%',
          bottom: '14%',
          top: '16%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-05-10 20:00',
            '2024-05-10 21:00',
            '2024-05-10 22:00',
            '2024-05-10 23:00',
            '2024-05-11 00:00',
            '2024-05-11 01:00',
            '2024-05-11 02:00',
            '2024-05-11 03:00',
            '2024-05-11 04:00',
            '2024-05-11 05:00',
            '2024-05-11 06:00',
            '2024-05-11 07:00',
            '2024-05-11 08:00',
            '2024-05-11 09:00',
            '2024-05-11 10:00',
            '2024-05-11 11:00',
            '2024-05-11 12:00',
            '2024-05-11 13:00',
            '2024-05-11 14:00',
            '2024-05-11 15:00',
            '2024-05-11 16:00',
            '2024-05-11 17:00',
            '2024-05-11 18:00',
            '2024-05-11 19:00',
            '2024-05-11 20:00',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2,
            },
          },
          axisLabel: {
            interval: 11,
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
          max: '1200',
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
            show: false,
          },
        },
        series: [
          {
            data: [
              1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
              1000, 1000, 1000
            ],
            type: 'line',
            // smooth: true, // 可选，平滑线
            symbol: 'none',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(0, 217, 192, 0.28)',
                },
                {
                  offset: 1,
                  color: 'rgba(0, 217, 193, 0)',
                },
              ]),
              origin: 'start',
            },
            itemStyle: {
              normal: {
                color: 'rgba(0, 217, 192, 1)', // 折线颜色
              },
            },
            symbolSize: 10,
          },
        ],
      },
      chartCssStyle5: {
        width: 1060,
        height: 450,
        top: 805,
        left: 2590,
      },
      chartOption5: {
        backgroundColor: 'transparent',
        grid: {
          left: '7.7%',
          right: '8%',
          bottom: '14%',
          top: '16%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: 'category',
          data: [
            '2024-05-10 20:00',
            '2024-05-10 21:00',
            '2024-05-10 22:00',
            '2024-05-10 23:00',
            '2024-05-11 00:00',
            '2024-05-11 01:00',
            '2024-05-11 02:00',
            '2024-05-11 03:00',
            '2024-05-11 04:00',
            '2024-05-11 05:00',
            '2024-05-11 06:00',
            '2024-05-11 07:00',
            '2024-05-11 08:00',
            '2024-05-11 09:00',
            '2024-05-11 10:00',
            '2024-05-11 11:00',
            '2024-05-11 12:00',
            '2024-05-11 13:00',
            '2024-05-11 14:00',
            '2024-05-11 15:00',
            '2024-05-11 16:00',
            '2024-05-11 17:00',
            '2024-05-11 18:00',
            '2024-05-11 19:00',
            '2024-05-11 20:00',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2,
            },
          },
          axisLabel: {
            interval: 11,
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
          max: '1',
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
            show: false,
          },
        },
        series: [
          {
            data: [0.01, 0.02, 0, 0, 0, 0.1, 0, 0, 0.2, 0.4, 0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2],
            type: 'line',
            // smooth: true, // 可选，平滑线
            symbol: 'none',
            // areaStyle: {
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(0, 217, 192, 0.28)',
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(0, 217, 193, 0)',
            //     },
            //   ]),
            //   origin: 'start',
            // },
            itemStyle: {
              normal: {
                color: 'rgba(54, 49, 254, 1)', // 折线颜色
              },
            },
            symbolSize: 10,
          },
        ],
      },
      chartCssStyle6: {
        width: 734,
        height: 550,
        top: 1502,
        left: 120,
      },
      chartOption6: {
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
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ['温度', '湿度'],
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
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
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
            interval: 3,
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
        yAxis: [
          {
            type: 'value',
            max: '35',
            min: '-6',
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
          {
            type: 'value',
            max: '79',
            min: '0',
            splitLine: {
              show: false,
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
        ],
        series: [
          {
            name: '湿度',
            yAxisIndex: 1,
            data: [35, 43, 45, 40, 52, 50, 45, 47, 44, 50, 45, 50, 55, 50, 44, 42, 44, 46, 46, 64, 66, 69, 72, 73, 79],
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
            name: '温度',
            data: [12, 9, 6, 8, 7, 7.8, 6.4, 6.2, 7.5, 5.5, 8.5, 7.6, 8, 10.1, 6.4, 8.5, 9.8, 9.5, 8, 7.4, 6.2, 5.3, 7.1, 6.1, 6],
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
      chartCssStyle7: {
        width: 734,
        height: 550,
        top: 1502,
        left: 820,
      },
      chartOption7: {
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
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ['风速', '风向'],
          // right: 10,
          top: 15,
          textStyle: {
            color: '#BCE3FF',
            fontSize: 22,
          },
          itemWidth: 40,
          itemHeight: 18,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
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
            interval: 3,
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
        yAxis: [
          {
            type: 'value',
            max: '20',
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#3B4C5A',
                type: 'dashed', // ! 网格虚线设置
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(59, 76, 90, 1)',
                width: 2,
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
          },
          {
            type: 'value',
            max: '360',
            splitNumber: 5,
            splitLine: {
              show: false,
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
        ],
        series: [
          {
            name: '风速',
            data: [6.5, 7, 6.5, 8.4, 8.5, 5, 2, 2, 3, 0.3, 2.5, 1.7, 2.1, 2.8, 0.7, 18, 16, 18, 0.7, 17.5, 18.4, 1.4, 4.6, 3, 2],
            type: 'line',
            smooth: false, // 可选，平滑线
            symbol: 'circle', //标记的图形为实心圆
            itemStyle: {
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(108, 80, 248, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(108, 80, 248, 1)',
                  },
                ],
              },
              borderColor: 'rgba(108, 80, 248, 1)',
              borderWidth: 1,
            },
            symbolSize: 10,
          },
          {
            yAxisIndex: 1,
            name: '风向',
            data: [280, 330, 280, 340, 350, 290, 290, 280, 310, 310, 340, 290, 344, 294, 315, 279, 342, 312, 351, 324, 298, 304, 301, 280, 299],
            type: 'line',
            smooth: false, // 可选，平滑线
            symbol: 'circle', //标记的图形为实心圆
            itemStyle: {
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255, 128, 62, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 128, 62, 1)',
                  },
                ],
              },
              borderColor: 'rgba(255, 128, 62, 1)',
              borderWidth: 1,
            },
            symbolSize: 10,
          },
        ],
      },
      chartCssStyle8: {
        width: 794,
        height: 550,
        top: 1502,
        left: 1510,
      },
      chartOption8: {
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
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ['大气压', '降雨量'],
          // right: 10,
          top: 15,
          textStyle: {
            color: '#BCE3FF',
            fontSize: 22,
          },
          itemWidth: 40,
          itemHeight: 18,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '00:00',
            '03:00',
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
            interval: 3,
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
        yAxis: [
          {
            type: 'value',
            max: '1200',
            splitNumber: 5,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#3B4C5A',
                type: 'dashed', // ! 网格虚线设置
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(59, 76, 90, 1)',
                width: 2,
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
          },
          {
            type: 'value',
            max: '1',
            splitLine: {
              show: false,
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
        ],
        series: [
          {
            name: '大气压',
            data: [
              1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040,
              1040, 1040, 1040,
            ],
            type: 'line',
            smooth: false, // 可选，平滑线
            symbol: 'circle', //标记的图形为实心圆
            itemStyle: {
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(30, 139, 208, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(30, 139, 208, 1)',
                  },
                ],
              },
              borderColor: 'rgba(30, 139, 208, 1)',
              borderWidth: 1,
            },
            symbolSize: 10,
          },
          {
            yAxisIndex: 1,
            name: '降雨量',
            data: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.1, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.14, 0.08, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01 ],
            type: 'line',
            smooth: false, // 可选，平滑线
            symbol: 'circle', //标记的图形为实心圆
            itemStyle: {
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: '#ffffff',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(47, 176, 93, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(47, 176, 93, 1)',
                  },
                ],
              },
              borderColor: 'rgba(47, 176, 93, 1)',
              borderWidth: 1,
            },
            symbolSize: 10,
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
.weather {
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
    .prediction {
      position: absolute;
      top: 1438px;
      left: 2402px;
      height: 592px;
      width: 1318px;
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
  }
}
</style>
