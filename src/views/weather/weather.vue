<template>
  <div class="weather">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
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
          <div class="prediction_item" v-for="(item, index) in predictionList" :key="index" :style="{borderBottom: `${(index == predictionList.length - 1) ? '' : '1px solid #3F5B6F'}`}">
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
      predictionList: [
        [
          {
            text: '温度(°C)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '湿度(%)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '风向',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '大气压(hPa)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '风力等级',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '风速(m/s)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '降雨量(mm)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '总辐射(W/m2)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '散辐射(W/m2)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '直辐射(W/m2)',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '日期',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.54',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.81',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.81',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.04',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:48:33',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.55',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.67',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.04',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:47:30',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.58',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.79',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.05',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:46:27',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.65',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.67',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '1.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.4',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.05',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:45:21',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.64',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.76',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.06',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:44:18',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.68',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.48',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '1.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.4',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.06',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:43:16',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.71',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.61',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.07',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:42:13',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.71',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.45',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.09',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:41:10',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ],
        [
          {
            text: '1.72',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '98px'
          },
          {
            text: '53.6',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '99px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '315',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '66px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '80.8',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '131px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '104px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '112px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '140.2',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '127px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.09',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '151px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '154px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '0.0',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '145px',
            borderLeft: '1px solid #3F5B6F'
          },
          {
            text: '18:40:04',
            fontSize: '20px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '111px',
            borderLeft: '1px solid #3F5B6F'
          },
        ]
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2024-03-04 20:00:00', '2024-03-04 21:00:00',
          '2024-03-04 22:00:00', '2024-03-04 23:00:00', '2024-03-05 00:00:00',
          '2024-03-05 01:00:00', '2024-03-05 02:00:00', '2024-03-05 03:00:00', 
          '2024-03-05 04:00:00', '2024-03-05 05:00:00', '2024-03-05 06:00:00',
          '2024-03-05 07:00:00', '2024-03-05 08:00:00', '2024-03-05 09:00:00',
          '2024-03-05 10:00:00', '2024-03-05 11:00:00', '2024-03-05 12:00:00',
          '2024-03-05 13:00:00', '2024-03-05 14:00:00', '2024-03-05 15:00:00',
          '2024-03-05 16:00:00', '2024-03-05 17:00:00', '2024-03-05 18:00:00'],
          offset: 20,
          axisTick: {
              show: false,
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          }
        },
        yAxis: {
          name: "",
          type: 'value',
          max:'60',
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
      			textStyle: {
      				color: '#BCE3FF',
      				fontWeight: 400,
      				fontSize: '22',
      				margin: 22
      			},
          },
          position: 'left'
        },
        series: [{
          name: '湿度',
          type: 'bar',
          barWidth: '20px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#89D470'
              }, {
                offset: 1,
                color: '#0FBCB6'
              }]),
              barBorderRadius: 20,
            },
          },
          data: [50, 55, 48, 40, 38, 35, 35, 36, 40, 32, 32, 30, 33, 35, 37, 43, 47, 45, 45, 42, 39, 38, 36]
        }]
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
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2024-03-04 20:00:00', '2024-03-04 21:00:00',
            '2024-03-04 22:00:00', '2024-03-04 23:00:00', '2024-03-05 00:00:00',
            '2024-03-05 01:00:00', '2024-03-05 02:00:00', '2024-03-05 03:00:00', 
            '2024-03-05 04:00:00', '2024-03-05 05:00:00', '2024-03-05 06:00:00',
            '2024-03-05 07:00:00', '2024-03-05 08:00:00', '2024-03-05 09:00:00',
            '2024-03-05 10:00:00', '2024-03-05 11:00:00', '2024-03-05 12:00:00',
            '2024-03-05 13:00:00', '2024-03-05 14:00:00', '2024-03-05 15:00:00',
            '2024-03-05 16:00:00', '2024-03-05 17:00:00', '2024-03-05 18:00:00'],
          axisLine: {
            show: true,
            // onZero: false,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          max:'1',
          min:'-5',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
          axisLine: {
            show: false
          },
        },
        series: [{
          data: [0, -0.8, -1.7, -2.2, -2.7, -3, -3.3, -3.4, -3.4, -3.6, -3.8, -3.7, -3.6, -3, -2.1, -1.4, -0.7, 0, 0.3, 0.2, -0.7, -1.2, -1.7],
          type: 'line',
          smooth: true, // 可选，平滑线
          symbol: 'circle',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255, 154, 193, 0)'
            }, {
              offset: 1,
              color: 'rgba(255, 97, 142, 0.28)'
            }]),
            origin: "end"
          },
          itemStyle: {
              normal: {
                  color: '#FF618E' // 折线颜色
              }
          },
          symbolSize: 10,
        }]
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
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2024-03-04 20:00:00', '2024-03-04 21:00:00',
            '2024-03-04 22:00:00', '2024-03-04 23:00:00', '2024-03-05 00:00:00',
            '2024-03-05 01:00:00', '2024-03-05 02:00:00', '2024-03-05 03:00:00', 
            '2024-03-05 04:00:00', '2024-03-05 05:00:00', '2024-03-05 06:00:00',
            '2024-03-05 07:00:00', '2024-03-05 08:00:00', '2024-03-05 09:00:00',
            '2024-03-05 10:00:00', '2024-03-05 11:00:00', '2024-03-05 12:00:00',
            '2024-03-05 13:00:00', '2024-03-05 14:00:00', '2024-03-05 15:00:00',
            '2024-03-05 16:00:00', '2024-03-05 17:00:00', '2024-03-05 18:00:00'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          max:'8',
          min:'0',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
              type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22,
            },
            formatter: function(value) {
              // 这里可以根据实际需求自定义显示的值，例如加单位，格式化数字等
              return '-' + value;
            }
          },
          axisLine: {
            show: false
          },
        },
        series: [{
          data: [5, 6.5, 5.4, 4.4, 4.6, 3.9, 3.2, 2.8, 3.2, 3.3, 5.5, 6.6, 6.6, 8, 7.6, 6.4, 7.2, 7.2, 7.5, 6.4, 7.4, 6.4, 6],
          type: 'line',
          // smooth: true, // 可选，平滑线
          symbol: 'none',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(252, 234, 54, 0.28)'
            }, {
              offset: 1,
              color: 'rgba(254, 234, 47, 0)'
            }]),
            origin: "start"
          },
          itemStyle: {
            normal: {
              color: '#FEEA31' // 折线颜色
            }
          },
          symbolSize: 10,
        }]
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
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2024-03-04 20:00:00', '2024-03-04 21:00:00',
            '2024-03-04 22:00:00', '2024-03-04 23:00:00', '2024-03-05 00:00:00',
            '2024-03-05 01:00:00', '2024-03-05 02:00:00', '2024-03-05 03:00:00', 
            '2024-03-05 04:00:00', '2024-03-05 05:00:00', '2024-03-05 06:00:00',
            '2024-03-05 07:00:00', '2024-03-05 08:00:00', '2024-03-05 09:00:00',
            '2024-03-05 10:00:00', '2024-03-05 11:00:00', '2024-03-05 12:00:00',
            '2024-03-05 13:00:00', '2024-03-05 14:00:00', '2024-03-05 15:00:00',
            '2024-03-05 16:00:00', '2024-03-05 17:00:00', '2024-03-05 18:00:00'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
              show: false,
          },
        },
        yAxis: {
          type: 'value',
          max:'35',
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22,
            }
          },
          axisLine: {
            show: false
          },
        },
        series: [{
          data: [17, 23, 24, 21, 17, 6, 14, 20, 13, 2, 7, 14, 11, 13, 15, 11, 10, 11, 10, 14, 16, 20],
          type: 'line',
          // smooth: true, // 可选，平滑线
          symbol: 'triangle',
          symbolSize: 14,
          itemStyle: {
            normal: {
              color: 'rgba(235, 94, 0, 1)', // 折线颜色
            }
          },
          lineStyle: {
            color: '#5c69e5',
          }
        }]
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
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2024-03-04 20:00:00', '2024-03-04 21:00:00',
            '2024-03-04 22:00:00', '2024-03-04 23:00:00', '2024-03-05 00:00:00',
            '2024-03-05 01:00:00', '2024-03-05 02:00:00', '2024-03-05 03:00:00', 
            '2024-03-05 04:00:00', '2024-03-05 05:00:00', '2024-03-05 06:00:00',
            '2024-03-05 07:00:00', '2024-03-05 08:00:00', '2024-03-05 09:00:00',
            '2024-03-05 10:00:00', '2024-03-05 11:00:00', '2024-03-05 12:00:00',
            '2024-03-05 13:00:00', '2024-03-05 14:00:00', '2024-03-05 15:00:00',
            '2024-03-05 16:00:00', '2024-03-05 17:00:00', '2024-03-05 18:00:00'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          max:'1200',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
              type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22,
            }
          },
          axisLine: {
            show: false
          },
        },
        series: [{
          data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
          type: 'line',
          // smooth: true, // 可选，平滑线
          symbol: 'none',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 217, 192, 0.28)'
            }, {
              offset: 1,
              color: 'rgba(0, 217, 193, 0)'
            }]),
            origin: "start"
          },
          itemStyle: {
            normal: {
              color: 'rgba(0, 217, 192, 1)' // 折线颜色
            }
          },
          symbolSize: 10,
        }]
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
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2024-03-04 20:00:00', '2024-03-04 21:00:00',
            '2024-03-04 22:00:00', '2024-03-04 23:00:00', '2024-03-05 00:00:00',
            '2024-03-05 01:00:00', '2024-03-05 02:00:00', '2024-03-05 03:00:00', 
            '2024-03-05 04:00:00', '2024-03-05 05:00:00', '2024-03-05 06:00:00',
            '2024-03-05 07:00:00', '2024-03-05 08:00:00', '2024-03-05 09:00:00',
            '2024-03-05 10:00:00', '2024-03-05 11:00:00', '2024-03-05 12:00:00',
            '2024-03-05 13:00:00', '2024-03-05 14:00:00', '2024-03-05 15:00:00',
            '2024-03-05 16:00:00', '2024-03-05 17:00:00', '2024-03-05 18:00:00'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          max:'1',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
              type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22,
            }
          },
          axisLine: {
            show: false
          },
        },
        series: [{
          data: [0.2],
          type: 'line',
          // smooth: true, // 可选，平滑线
          symbol: 'none',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 217, 192, 0.28)'
            }, {
              offset: 1,
              color: 'rgba(0, 217, 193, 0)'
            }]),
            origin: "start"
          },
          itemStyle: {
            normal: {
              color: 'rgba(0, 217, 192, 1)' // 折线颜色
            }
          },
          symbolSize: 10,
        }]
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
          top:'16%',
          containLabel: true
        },
        legend: {
          data: ['温度', '湿度'],
          // right: 10,
          top: 15,
          textStyle: {
              color: "#BCE3FF",
              fontSize: 22
          },
          itemWidth: 40,
          itemHeight: 18,
          itemStyle: {
            // 设置图例标记的样式
            color: 'transparent', // 颜色
          }
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00'],
          axisLine: {
            show: true,
            // onZero: false,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 3,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: [{
          type: 'value',
          max:'35',
          min:'-6',
          splitNumber: 6,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2
            }
          },
        },
        {
          type: 'value',
          max:'79',
          min:'0',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2
            }
          },
        }],
        series: [{
          name: '湿度',
          yAxisIndex: 1,
          data: [35, 43, 45, 40, 52, 50, 45, 47, 44, 50, 45, 50, 55,
          50, 44, 42, 44, 46, 46, 64, 66, 69, 72, 73, 79],
          type: 'line',
          smooth: true, // 可选，平滑线
          symbol: 'none',
          itemStyle: {
            normal: {
              color: 'rgba(0, 233, 255, 1)' // 折线颜色
            }
          },
          symbolSize: 10,
        },
        {
          name: '温度',
          data: [6, 4, 1, 3, 2, 2.8, 1.4, 1.2, 0.5, 0.5, 1.5,
          2.6, 3, 2.1, 1.4, 0.5, 1.8, 2.5, 3, 2.4, -3, -4, -4, -4, -5],
          type: 'line',
          smooth: true, // 可选，平滑线
          symbol: 'none',
          itemStyle: {
            normal: {
              color: 'rgba(255, 85, 169, 1)' // 折线颜色
            }
          },
          symbolSize: 10,
        }]
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
          top:'16%',
          containLabel: true
        },
        legend: {
          data: ['风速', '风向'],
          // right: 10,
          top: 15,
          textStyle: {
              color: "#BCE3FF",
              fontSize: 22
          },
          itemWidth: 40,
          itemHeight: 18,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00'],
          axisLine: {
            show: true,
            // onZero: false,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 3,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: [{
          type: 'value',
          max:'400',
          splitNumber: 4,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
        },
        {
          type: 'value',
          max:'1',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2
            }
          },
        }],
        series: [{
          name: '风向',
          data: [130, 140, 160, 165, 165, 165, 40, 45, 60,
          8, 36, 30, 25, 26, 28, 30, 20, 370, 340, 370, 15, 360, 370, 20, 80],
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
        {
          yAxisIndex: 1,
          name: '风速',
          data: [0],
          type: 'line',
          smooth: true, // 可选，平滑线
          symbol: 'none',
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
                  color: 'rgba(221, 46, 37, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(221, 46, 37, 1)',
                },
              ],
            },
            borderColor: 'rgba(221, 46, 37, 1)',
            borderWidth: 1,
          },
          symbolSize: 10,
        }]
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
          top:'16%',
          containLabel: true
        },
        legend: {
          data: ['大气压', '降雨量'],
          // right: 10,
          top: 15,
          textStyle: {
              color: "#BCE3FF",
              fontSize: 22
          },
          itemWidth: 40,
          itemHeight: 18,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00',
           '21:00', '00:00', '03:00'],
          axisLine: {
            show: true,
            // onZero: false,
            lineStyle: {
              color: "rgba(59, 76, 90, 1)",
              width: 2
            }
          },
          axisLabel: {
            interval: 3,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22',
              color: '#BCE3FF'
            }
          },
          offset: 20,
          axisTick: {
            show: false,
          },
        },
        yAxis: [{
          type: 'value',
          max:'1200',
          splitNumber: 5,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2
            }
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
        },
        {
          type: 'value',
          max:'1',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontWeight: 400,
              fontSize: '22',
              margin: 22
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(59, 76, 90, 1)',
              width: 2
            }
          },
        }],
        series: [{
          name: '大气压',
          data: [1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040,
          1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040],
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
          data: [0],
          type: 'line',
          smooth: true, // 可选，平滑线
          symbol: 'none',
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
        }]
      }
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
      .prediction_item {
        border-bottom: 1px solid #3F5B6F;
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
