<template>
  <div class="weatherForecast">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <!-- <img src="/assets/images/back.png" alt="" class="back_image" @click="$router.back()" /> -->
        <img src="/assets/images/next.png" alt="" class="over_image" @click="$router.push({path: '/weather'})" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <div class="prediction">
          <div class="prediction_item" v-for="(item, index) in predictionList" :key="index" :style="{width: `${137 * item.length}px`}">
            <div class="prediction_item_text" v-for="(it, idx) in item" :key="idx" :style="it">{{ it.text }}</div>
          </div>
        </div>
        <!-- 近一个月天气情况echarts -->
        <commonCharts :option="chartOption" :chartIndex="0" :cssStyle="chartCssStyle"></commonCharts>
        <!-- 短期预测功率echarts -->
        <commonCharts :option="chartOption1" :chartIndex="1" :cssStyle="chartCssStyle1"></commonCharts>
        <!-- 短期准确率echarts -->
        <commonCharts :option="chartOption2" :chartIndex="2" :cssStyle="chartCssStyle2"></commonCharts>
        <!-- 温度与湿度左echarts -->
        <commonCharts :option="chartOption3" :chartIndex="3" :cssStyle="chartCssStyle3"></commonCharts>
        <!-- 温度与湿度左背景 -->
        <div class="left_image"></div>
        <!-- 温度与湿度右echarts -->
        <commonCharts :option="chartOption4" :chartIndex="4" :cssStyle="chartCssStyle4"></commonCharts>
        <!-- 温度与湿度右背景 -->
        <div class="right_image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
// import carouselBoxVue from './components/carouselBox.vue';
import commonCharts from '../../components/commonCharts.vue';
let echarts = require('echarts/lib/echarts'); //按需引入
export default {
  name: 'weatherForecast',
  components: {
    customText,
    widgetImage,
    verticalText,
    // carouselBoxVue,
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
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-04',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-05',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-05',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
          {
            text: '03-05',
            fontSize: '30px',
            color: '#7FB7E9',
            fontWeight: 500,
            marginBottom: '56px'
          },
        ],
        [
          {
            text: '18:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '19:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '20:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '21:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '22:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '23:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '24:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '01:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '02:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
          {
            text: '03:00',
            fontSize: '30px',
            color: 'rgba(127,183,233,0.85)',
            fontWeight: 500,
            marginBottom: '77px'
          },
        ],
        [
          {
            text: '5°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '3°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '2.1°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '1°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '0°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '-0.5°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '-2.9°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '-2.9°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '-3.9°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
          {
            text: '-2.5°',
            fontSize: '40px',
            color: '#43F2FF',
            fontWeight: 500,
          },
        ]
      ],
      textList: [
        {
          text: '2700',
          fontSize: 60,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 900,
          textAlign: 'left',
          color: '#FCB52B',
          width: 134,
          left: 1225,
          top: 339,
        },
        {
          text: '167',
          fontSize: 60,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 900,
          textAlign: 'left',
          color: '#FCB52B',
          width: 101,
          left: 1643,
          top: 339,
        },
        {
          text: '401',
          fontSize: 60,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 900,
          textAlign: 'left',
          color: '#FCB52B',
          width: 101,
          left: 2050,
          top: 339,
        },
        {
          text: '2132',
          fontSize: 60,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 900,
          textAlign: 'left',
          color: '#FCB52B',
          width: 134,
          left: 2411,
          top: 339,
        },
        {
          text: '201988.11',
          fontSize: 50,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 500,
          textAlign: 'left',
          color: '#0DDEF1',
          width: 228,
          left: 2893,
          top: 320,
          textShadow: '0px 0px 30px rgba(18, 233, 208, 0.8)',
        },
        {
          text: '10143.02',
          fontSize: 50,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 500,
          textAlign: 'left',
          color: '#0DDEF1',
          width: 201,
          left: 2893,
          top: 530,
          textShadow: '0px 0px 30px rgba(18, 233, 208, 0.8)',
        },
        {
          text: '153455.13',
          fontSize: 50,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 500,
          textAlign: 'left',
          color: '#0DDEF1',
          width: 228,
          left: 3333,
          top: 320,
          textShadow: '0px 0px 30px rgba(18, 233, 208, 0.8)',
        },
        {
          text: '38389.96',
          fontSize: 50,
          fontFamily: 'DINPro, DINPro',
          fontWeight: 500,
          textAlign: 'left',
          color: '#0DDEF1',
          width: 201,
          left: 3333,
          top: 530,
          textShadow: '0px 0px 30px rgba(18, 233, 208, 0.8)',
        },
        {
          text: '全部站点',
          fontSize: 28,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 112,
          left: 2943,
          top: 407,
        },
        {
          text: '220v站点',
          fontSize: 28,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 120,
          left: 2943,
          top: 617,
        },
        {
          text: '10kv站点',
          fontSize: 28,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 120,
          left: 3383,
          top: 407,
        },
        {
          text: '380v站点',
          fontSize: 28,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 120,
          left: 3383,
          top: 617,
        },
        {
          text: '10kv站点',
          fontSize: 30,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#7FB7E9',
          width: 128,
          left: 1261,
          top: 1939,
        },
        {
          text: '380v站点',
          fontSize: 30,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#7FB7E9',
          width: 128,
          left: 1753,
          top: 1939,
        },
        {
          text: '220v站点',
          fontSize: 30,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#7FB7E9',
          width: 128,
          left: 2244,
          top: 1939,
        },
        {
          text: '正常占比',
          fontSize: 20,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 80,
          left: 1473,
          top: 1924,
        },
        {
          text: '正常占比',
          fontSize: 20,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 80,
          left: 1964,
          top: 1924,
        },
        {
          text: '正常占比',
          fontSize: 20,
          fontFamily: 'Helvetica',
          textAlign: 'left',
          color: '#ffffff',
          width: 80,
          left: 2457,
          top: 1924,
        },
        {
          text: '100%',
          fontSize: 36,
          fontFamily: 'Impact',
          textAlign: 'left',
          color: '#ffffff',
          width: 78,
          left: 1477,
          top: 1957,
        },
        {
          text: '100%',
          fontSize: 36,
          fontFamily: 'Impact',
          textAlign: 'left',
          color: '#ffffff',
          width: 78,
          left: 1969,
          top: 1957,
        },
        {
          text: '100%',
          fontSize: 36,
          fontFamily: 'Impact',
          textAlign: 'left',
          color: '#ffffff',
          width: 78,
          left: 2460,
          top: 1957,
        },
        {
          text: '温度 (°C)',
          fontSize: 22,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 90,
          left: 305,
          top: 1280,
        },
        {
          text: '湿度 (%)',
          fontSize: 22,
          fontFamily: 'SourceHanSansCN, SourceHanSansCN',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 90,
          left: 767,
          top: 1280,
        },
      ],
      imageList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      chartCssStyle: {
        width: 903,
        height: 440,
        top: 1630,
        left: 125,
      },
      chartOption: {
        backgroundColor: 'transparent',
        title: {
            // text: '汪琦玲-拉动时间轴演示',
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
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
        legend: {
          data: ['晴天', '阴天', '雨雪', '其他'],
          // right: 10,
          top: -5,
          icon: 'path://M1353.216 843.264H339.456c-185.856 0-337.92-152.064-337.92-337.92s152.064-337.92 337.92-337.92h1013.76c185.856 0 337.92 152.064 337.92 337.92s-152.064 337.92-337.92 337.92z',
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
          data: ['定西市','安定区','临洮县','陇西县','通渭县','渭源县','漳县','岷县'],
          offset: 8,
          axisTick: {
              show: false,
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '22'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#889BAB",
              width: 2
            }
          }
        },
        yAxis: {
          name: "单位/天",
          type: 'value',
          nameLocation: "end",
          nameTextStyle: {
            color: '#BCE3FF',
    				fontSize: '24',
    				fontWeight: 'normal',
    				align: 'left',
    				padding: [0, 0, 30, 0]
          },
          max:'25',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#889BAB',
              width: 2
            }
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
          name: '晴天',
          type: 'bar',
          barWidth: '12px',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FBC706'
                }, {
                    offset: 1,
                    color: '#F5814C'
                }]),
                barBorderRadius: 12,
            },
          },
          data: [19, 19, 20, 23, 15, 22, 23, 23]
        },
        {
          name: '阴天',
          type: 'bar',
          barWidth: '12px',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#278CF7'
                }, {
                    offset: 1,
                    color: '#6851F1'
                }]),
                barBorderRadius: 11,
            }
            
          },
          data: [15, 15, 13, 11, 15, 12, 11, 11]
        },
        {
          name: '雨雪',
          type: 'bar',
          barWidth: '12px',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#89D470'
                }, {
                    offset: 1,
                    color: '#0FBCB6'
                }]),
            barBorderRadius: 11,
            }
          },
          data: [0, 0, 0, 0, 3, 0, 0, 0]
        },
        {
          name: '其他',
          type: 'bar',
          barWidth: '12px',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FFADAA'
                }, {
                    offset: 1,
                    color: '#DD2E25'
                }]),
            barBorderRadius: 11,
            }
          },
          data: [0, 0, 0, 0, 0, 0, 0, 0]
        }],
      },
      chartCssStyle1: {
        width: 983,
        height: 470,
        top: 917,
        left: 2725,
      },
      chartOption1: {
        backgroundColor: 'transparent',
        grid: {
          top: '15%',
          bottom: '15%', //也可设置left和right设置距离来控制图表的大小
          left: '13%',
          right: '4%'
        },
        legend: {
          data: ['短期预测功率'],
          right: 10,
          top: 10,
          // icon: 'path://M1353.216 843.264H339.456c-185.856 0-337.92-152.064-337.92-337.92s152.064-337.92 337.92-337.92h1013.76c185.856 0 337.92 152.064 337.92 337.92s-152.064 337.92-337.92 337.92z',
          textStyle: {
              color: "#BCE3FF",
              fontSize: 22
          },
          itemWidth: 49,
          itemHeight: 20,
          // itemGap: 35
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
          data: ['03-04 00:00', '03-04 01:00', '03-04 02:00', '03-04 03:00', '03-04 04:00', '03-04 05:00', '03-04 06:00', '03-04 07:00', '03-04 08:00', '03-04 09:00'],
          interval: 0,
          offset: 35,
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
              fontSize: '22'
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            name: '单位/kw',
            nameLocation: "end",
            nameTextStyle: {
              color: '#BCE3FF',
              fontSize: '24',
              fontWeight: 'normal',
              align: 'left',
              padding: [0, 0, 20, 0]
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
              }
            },
            max: 21000,
            scale: true,
            splitNumber: 6,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#BCE3FF',
                fontSize: '22'
              },
            },
          }
        ],
        dataZoom: [
          {
            show: false,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '110%',
            handleStyle: {
              color: '#5B3AAE',
            },
            textStyle: {
              color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
          },
        ],
        series: [
          {
            name: '短期预测功率',
            type: 'line',
            yAxisIndex: 0,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 12, //标记的大小
            // showSymbol: false,
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
                    color: '#FF4598',
                  },
                  {
                    offset: 1,
                    color: '#FF4598',
                  },
                ],
              },
              borderColor: '#FF4598',
              borderWidth: 1,
              shadowColor: '#FF4598',
              shadowBlur: 10
            },
            lineStyle: {
              width: 4,
              color: '#FF4598',
              // shadowColor: '#FF4598',
              // shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0.8,
            },
            z: 5,
            data: [0, 0, 18000, 0, 0, 18000, 0, 0, 17500, 0],
          }
        ],
      },
      chartCssStyle2: {
        width: 983,
        height: 470,
        top: 1580,
        left: 2725,
      },
      chartOption2: {
        backgroundColor: 'transparent',
        grid: {
          top: '15%',
          bottom: '15%', //也可设置left和right设置距离来控制图表的大小
          left: '13%',
          right: '4%'
        },
        legend: {
          data: ['短期准确率'],
          right: 10,
          top: 15,
          // icon: 'path://M1353.216 843.264H339.456c-185.856 0-337.92-152.064-337.92-337.92s152.064-337.92 337.92-337.92h1013.76c185.856 0 337.92 152.064 337.92 337.92s-152.064 337.92-337.92 337.92z',
          textStyle: {
            color: "#BCE3FF",
            fontSize: 22
          },
          itemWidth: 49,
          itemHeight: 20,
          // itemGap: 35
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
          data: ['2024-02-25', '2024-02-26', '2024-02-27', '2024-02-28', '2024-02-29', '2024-03-01', '2024-03-02', '2024-03-03'],
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
              fontSize: '22'
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            name: '单位/kw',
            nameLocation: "end",
            nameTextStyle: {
              color: '#BCE3FF',
              fontSize: '24',
              fontWeight: 'normal',
              align: 'left',
              padding: [0, 0, 20, 0]
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#3B4C5A',
                type: 'dashed' // ! 网格虚线设置
              }
            },
            max: 21000,
            min: 0,
            scale: true,
            splitNumber: 7,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#BCE3FF',
                fontSize: '22'
              },
            },
          }
        ],
        dataZoom: [
          {
            show: false,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '110%',
            handleStyle: {
                color: '#5B3AAE',
            },
            textStyle: {
                color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
          },
        ],
        series: [
          {
            name: '短期准确率',
            type: 'line',
            yAxisIndex: 0,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 12, //标记的大小
            // showSymbol: false,
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
                    color: '#FF803E',
                  },
                  {
                    offset: 1,
                    color: '#FF803E',
                  },
                ],
              },
              borderColor: '#FF803E',
              borderWidth: 1,
              shadowColor: '#FF803E',
              shadowBlur: 10
            },
            lineStyle: {
              width: 2,
              color: '#FF803E',
              // shadowColor: '#FF803E',
              // shadowBlur: 5,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0.8,
            },
            z: 5,
            data: [10000, 11000, 15000, 14500, 17000, 13500, 4500, 12000],
          }
        ],
      },
      chartCssStyle3: {
        width: 400,
        height: 350,
        top: 966,
        left: 149,
      },
      chartOption3: {
        backgroundColor:"transparent",
        series: [{
          name: "刻度文字",
          type: "gauge",
          radius: "80%",
          center: ["50%", "55%"],
          startAngle: 235,
          endAngle: -55,
          splitNumber: 10,
          min: -50,
          max: 100,
          axisTick: {
              show: false
          },
          axisLine: {
            lineStyle: {
              color: [[0.36, "#FDB302"], [1, "#1E1E1E"]],
              width: 25,
              opacity: 0.9
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            distance: -70,
            fontSize: 22,
            color: '#9F9584',
          },
          detail: {
            show: false
          },
          pointer: {
              show: true,
              showAbove: false,
              width: 8,
              length: "70%",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                      offset: 0,
                      color: '#E2CE67',
                    },
                    {
                      offset: 1,
                      color: '#D9A157',
                    }
                  ]
                )
              },
          },
          markPoint: {
            symbol:'circle',
            symbolSize:5,
            itemStyle: {
              color: "#432f0d"
            },
            data: [
              {
                x: "50%",
                y: "55%",
              }
            ],
          },
          data: [4]
        }]
      },
      chartCssStyle4: {
        width: 400,
        height: 350,
        top: 966,
        left: 612,
      },
      chartOption4: {
        backgroundColor:"transparent",
        series: [
          {
            name: "小指针",
            type: "gauge",
            radius: "80%",
            center: ["50%", "55%"],
            startAngle: 235,
            endAngle: -55,
            splitNumber: 10,
            min: 0,
            max: 100,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: [[1, new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                      offset: 0,
                      color: '#FF8784',
                    },
                    {
                      offset: 1,
                      color: '#F90D00',
                    }
                  ]
                )]],
                width: 25,
                opacity: 0.9
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false
            },
            pointer: {
              show: true,
              showAbove: false,
              width: 8,
              length: "35%",
            },
            data: [35]
        },{
          name: "刻度文字",
          type: "gauge",
          radius: "80%",
          center: ["50%", "55%"],
          startAngle: 235,
          endAngle: -55,
          splitNumber: 10,
          min: 0,
          max: 100,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: [[0.65, "#00D8F9"], [1, "#1E1E1E"]],
              width: 25,
              opacity: 0.9
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            distance: -70,
            fontSize: 22,
            color: '#9F9584',
          },
          detail: {
            show: false
          },
          pointer: {
            show: true,
            showAbove: false,
            width: 8,
            length: "70%",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#022B2E',
                  },
                  {
                    offset: 1,
                    color: '#00D8F9',
                  }
                ]
              )
            },
          },
          markPoint: {
            symbol:'circle',
            symbolSize:5,
            itemStyle: {
              color: "#033742"
            },
            data: [
              {
                x: "50%",
                y: "55%",
              }
            ],
          },
          data: [65]
        }]
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
.weatherForecast {
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
      overflow-x: auto;
      position: absolute;
      top: 335px;
      left: 140px;
      height: 370px;
      width: 903px;
      .prediction_item {
        display: flex;

        .prediction_item_text {
          width: 77px;
          margin-right: 57px;
          white-space: nowrap;
        }
      }
    }
    /* 设置滚动条的宽度和颜色 */
    .prediction::-webkit-scrollbar {
      width: 24px;
      background-color: #182846;
    }
    
    /* 设置滚动条滑块的样式 */
    .prediction::-webkit-scrollbar-thumb {
      background-color: #2B416C;
      border-radius: 12px;
    }
    
    /* 设置滚动条滑块的hover状态样式 */
    .prediction::-webkit-scrollbar-thumb:hover {
      background-color: #2B416C;
    }
    .left_image {
      width: 151px;
      height: 129px;
      position: absolute;
      top: 1088px;
      left: 273px;
      background: url('./images/left.png');
    }
    .right_image {
      width: 151px;
      height: 129px;
      position: absolute;
      top: 1088px;
      left: 737px;
      background: url('./images/right.png');
    }
  }
}
</style>
