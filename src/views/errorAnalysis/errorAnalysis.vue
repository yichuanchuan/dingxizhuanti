<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/next.png" alt="" class="over_image" @click="$router.push({ path: '/patent' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
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
          text: '针对分站点、电压等级、装机容量的',
          fontSize: 52,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 400,
          textAlign: 'center',
          color: '#BCE3FF',
          width: 987,
          left: 2591,
          top: 507,
          lineHeight: 73,
        },
        {
          text: '功率预测模型优化，增强模型泛化',
          fontSize: 52,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 400,
          textAlign: 'center',
          color: '#BCE3FF',
          width: 987,
          left: 2591,
          top: 587,
          lineHeight: 73,
        },
        {
          text: '能力，提升模型预测准确率。',
          fontSize: 52,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 400,
          textAlign: 'center',
          color: '#BCE3FF',
          width: 987,
          left: 2591,
          top: 667,
          lineHeight: 73,
        },
        {
          text: '全面梳理影响负荷的各类关键影响因素',
          fontSize: 52,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 400,
          textAlign: 'center',
          color: '#BCE3FF',
          width: 987,
          left: 2587,
          top: 888,
          lineHeight: 73,
        },
        {
          text: '以及关联关系,研究适用于定西电网分',
          fontSize: 52,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 400,
          textAlign: 'center',
          color: '#BCE3FF',
          width: 987,
          left: 2587,
          top: 968,
          lineHeight: 73,
        },
        {
          text: '类负荷的分析及预测方法。',
          fontSize: 52,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 400,
          textAlign: 'center',
          color: '#BCE3FF',
          width: 987,
          left: 2587,
          top: 1048,
          lineHeight: 73,
        },
      ],
      chartCssStyle: {
        width: 2170,
        height: 561,
        top: 464,
        left: 135,
      },
      chartOption: {
        backgroundColor: 'transparent',
        grid: {
          top: '5%',
          bottom: '15%', //也可设置left和right设置距离来控制图表的大小
          left: '4%',
          right: '4%',
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
        xAxis: {
          data: [
            '04-13 00:00',
            '04-13 01:00',
            '04-13 02:00',
            '04-13 03:00',
            '04-13 04:00',
            '04-13 05:00',
            '04-13 06:00',
            '04-13 07:00',
            '04-13 08:00',
            '04-13 09:00',
            '04-13 10:00',
            '04-13 11:00',
            '04-13 12:00',
            '04-13 13:00',
            '04-13 14:00',
            '04-13 15:00',
            '04-13 16:00',
            '04-13 17:00',
            '04-13 18:00',
            '04-13 19:00',
            '04-13 20:00',
            '04-13 21:00',
            '04-13 22:00',
          ],
          interval: 0,
          offset: 15,
          axisLine: {
            show: false, //隐藏X轴轴线
          },
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#BCE3FF', //X轴文字颜色
              fontSize: '22',
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(59, 76, 90, 1)',
                type: 'dashed', // ! 网格虚线设置
              },
            },
            max: 95,
            min: 60,
            scale: true,
            splitNumber: 3,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#BCE3FF',
                fontSize: '22',
              },
              formatter: function(value) {
                // 自定义标签格式，例如添加单位
                return value + '%';
              },
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'line',
            yAxisIndex: 0,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 14, //标记的大小
            // showSymbol: false,
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
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: '#00FFD3',
                  },
                  {
                    offset: 0.5,
                    color: '#00FFD3',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(73, 214, 202, 0.5)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(73, 214, 202, 0.5)',
                  },
                ],
              },
              borderColor: 'rgba(73, 214, 202, 0.5)',
              borderWidth: 8,
              // shadowColor: 'rgba(73, 214, 202, 0.5)',
              // shadowBlur: 0
            },
            lineStyle: {
              width: 2,
              color: 'rgba(0, 255, 211, 1)',
              // shadowColor: '#FF803E',
              // shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0.8,
            },
            z: 5,
            data: [91, 93, 92, 91, 92, 92, 92, 92, 92, 95, 94, 93, 93, 93, 93, 91, 94, 94, 94, 94, 92, 91, 92],
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
            width: '234px',
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
            width: '234px',
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
            width: '233px',
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
            width: '214px',
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
            text: '5.65',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '8.52',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '9.85',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '5.86',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '3.05',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1.55',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '8.95',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '7.26',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
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
            text: '6.31',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '7.74',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '8.57',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '6.56',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '3.13',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1.01',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '6.34',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '8.38',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '准确率(%)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '96.98',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '97.42',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '96.85',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '97.72',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '98.11',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '96.68',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '97.08',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '97.16',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
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
            width: '234px',
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
            width: '234px',
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
            width: '233px',
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
            width: '214px',
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
            text: '176.39',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1361.66',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '3335.44',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '5613.32',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '8042.18',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '9464.23',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '10838.25',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '9337.31',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
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
            text: '247',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '1756.03',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '4224.58',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '6000.53',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '8050.59',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '9416.77',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '10936.51',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '9512.82',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '准确率(%)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '74.16',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '74.29',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '72.07',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '77.43',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '78.21',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '83.41',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '85.01',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '88.86',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
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
            width: '234px',
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
            width: '234px',
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
            width: '233px',
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
            width: '214px',
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
            text: '4723.56',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '2005.61',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '712.72',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '11.44',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '7.01',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '7.03',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '3.7',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '4.03',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
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
            text: '4482.32',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '2519.53',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '670.41',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '10.16',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '6.59',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '6.13',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '6.19',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '5.84',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
            borderLeft: '1px solid #3F5B6F',
          },
        ],
        [
          {
            text: '准确率(%)',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '224px',
          },
          {
            text: '84.5',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '81.97',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '82.28',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '84.57',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '234px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '96.0',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '96.19',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '233px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '96.1',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '231px',
            borderLeft: '1px solid #3F5B6F',
          },
          {
            text: '96.73',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '214px',
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
    .prediction {
      position: absolute;
      width: 2072px;
      height: 234px;
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
      top: 1252px;
      left: 160px;
    }
    .prediction2 {
      top: 1510px;
      left: 160px;
    }
    .prediction3 {
      top: 1768px;
      left: 160px;
    }
  }
}
</style>
