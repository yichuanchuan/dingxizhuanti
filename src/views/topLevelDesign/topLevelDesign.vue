<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-21 14:04:12
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="topLevelDesign">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 图片 -->
        <widgetImage v-for="(item, index) in imageList" :key="'widgetImage' + index" :value="item" :ispreview="true"></widgetImage>
        <!-- 竖文本 -->
        <verticalText v-for="(item, index) in verticalTextList" :options="item" :key="'verticalText' + index"></verticalText>
        <!-- 特殊文本 -->
        <div class="special_text text_one"><span style="color: #fbce19">4</span>座<span style="color: #fbce19">330</span>千伏变电站</div>
        <div class="special_text text_two"><span style="color: #fbce19">19</span>座<span style="color: #fbce19">110</span>千伏变电站</div>
        <div class="special_text text_three"><span style="color: #fbce19">乡村户</span>通电率<span style="color: #fbce19">100%</span></div>
        <div class="special_text text_four">
          被评为<span style="color: #46e8ff">国网公司、</span><br /><span style="color: #46e8ff">省公司数字化示范双标兵单位</span>
        </div>
        <div class="special_text text_five">数字化典型成功<br /><span style="color: #46e8ff">获国网公司陈国平副总经理批示肯定</span></div>
        <!-- 特殊文本2 -->
        <div class="special_text2 text2_one"><span style="font-size: 50px">3</span> 座装机 <span style="font-size: 50px">4115</span>兆瓦</div>
        <div class="special_text2 text2_two"><span style="font-size: 50px">5</span> 座装机 <span style="font-size: 50px">125</span>兆瓦</div>
        <div class="special_text2 text2_three"><span style="font-size: 50px">8</span> 座装机 <span style="font-size: 50px">150.707</span>兆瓦</div>
        <div class="special_text2 text2_four"><span style="font-size: 50px">3</span> 座装机 <span style="font-size: 50px">70.5</span>兆瓦</div>
        <div class="special_text2 text2_five"><span style="font-size: 50px">1</span> 座装机 <span style="font-size: 50px">15</span>兆瓦</div>
        <div class="special_text2 text2_six"><span style="font-size: 50px">1</span> 座装机 <span style="font-size: 50px">2.01</span>兆瓦</div>
        <!-- 3d饼图 -->
        <!-- <highCharts :chartIndex="0" :option="highChartOption" :cssStyle="highChartCssStyle"></highCharts> -->
        <!-- 底部按钮 -->
        <bottomNavMenu></bottomNavMenu>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import highCharts from '../../../src/components/highCharts.vue';
import bottomNavMenu from '../../../src/components/bottomNavMenu.vue';
export default {
  name: 'topLevelDesign',
  components: {
    customText,
    widgetImage,
    verticalText,
    highCharts,
    bottomNavMenu,
  },
  data() {
    return {
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
      textList: [
        {
          text: '数智化坚强电网',
          fontSize: 40,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#ffffff',
          width: 335,
          left: 300,
          top: 204,
        },
        {
          text: '平凉地图',
          fontSize: 40,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#ffffff',
          width: 335,
          left: 1658,
          top: 236,
        },
        {
          text: '相关数据',
          fontSize: 40,
          fontFamily: 'alibaba',
          textAlign: 'left',
          color: '#ffffff',
          width: 335,
          left: 2980,
          top: 204,
        },

        {
          text: '赋能 | 减负 | 创新 | 提效',
          fontSize: 36,
          fontWeight: 900,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(5, 134, 255, 1)',
          width: 414,
          left: 240,
          top: 380,
        },
        {
          text: '“业务+技术”双牵头模式',
          fontSize: 36,
          fontWeight: 900,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(5, 134, 255, 1)',
          width: 414,
          left: 240,
          top: 894,
        },
        {
          text: '“业务+技术”双牵头模式',
          fontSize: 36,
          fontWeight: 900,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(5, 134, 255, 1)',
          width: 414,
          left: 240,
          top: 1413,
        },
        {
          text: '网架数据',
          fontSize: 36,
          fontWeight: 900,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(5, 134, 255, 1)',
          width: 414,
          left: 2914,
          top: 400,
        },
        {
          text: '数字化转型工作成果',
          fontSize: 36,
          fontWeight: 900,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(5, 134, 255, 1)',
          width: 414,
          left: 2914,
          top: 1352,
        },
        {
          text: '“输、变、配”',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 240,
          top: 494,
        },
        {
          text: '“电、数、碳”',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 240,
          top: 615,
        },
        {
          text: '“数、智、人”',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 240,
          top: 738,
        },
        {
          text: '电网运营全业务转型样板',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: '#fff',
          width: 400,
          left: 460,
          top: 494,
        },
        {
          text: '供电服务全场景转型样板',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: '#fff',
          width: 400,
          left: 460,
          top: 614,
        },
        {
          text: '支撑保障全要素转型样板',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: '#fff',
          width: 400,
          left: 460,
          top: 738,
        },
        {
          text: '16家发电企业，总装机4478.217兆',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'center',
          color: 'rgba(251, 206, 25, 1)',
          width: 780,
          left: 1530,
          top: 1136,
          letterSpacing: 1,
        },
        {
          text: '主变容量1740兆伏安、线路10条、长度304.34公里',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#fff',
          width: 600,
          left: 3100,
          top: 598,
          letterSpacing: 1,
        },
        {
          text: '主变容量1267兆伏安、线路57条、长度1282.6公里',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#fff',
          width: 600,
          left: 3100,
          top: 858,
          letterSpacing: 1,
        },
        {
          text: '全市实现三相动力电自然村全覆盖',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#fff',
          width: 600,
          left: 3100,
          top: 1122,
          letterSpacing: 1,
        },
        {
          text: '2022',
          fontSize: 36,
          fontFamily: 'ruizi',
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#fff',
          width: 150,
          left: 3100,
          top: 1482,
        },
        {
          text: '4项',
          fontSize: 36,
          fontFamily: 'ruizi',
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#fff',
          width: 150,
          left: 3100,
          top: 1748,
        },
        {
          text: '火电厂',
          fontSize: 30,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 1280,
          top: 1222,
        },
        {
          text: '风电厂',
          fontSize: 30,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 1900,
          top: 1222,
        },
        {
          text: '光电厂',
          fontSize: 30,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 2450,
          top: 1222,
        },
        {
          text: '自备及余热电厂',
          fontSize: 30,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 1280,
          top: 1400,
        },
        {
          text: '生物质发电厂',
          fontSize: 30,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 1900,
          top: 1400,
        },
        {
          text: '水电厂',
          fontSize: 30,
          fontFamily: 'PingFangSC, PingFang SC;',
          textAlign: 'left',
          color: 'rgba(70, 232, 255, 1)',
          width: 300,
          left: 2450,
          top: 1400,
        },
      ],
      verticalTextList: [
        {
          text: '统筹协同',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          color: 'rgba(5, 177, 255, 1)',
          width: 50,
          left: 326,
          top: 1580,
        },
        {
          text: '因地制宜',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          color: 'rgba(5, 177, 255, 1)',
          width: 50,
          left: 494,
          top: 1580,
        },
        {
          text: '应用为主',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          color: 'rgba(5, 177, 255, 1)',
          width: 50,
          left: 668,
          top: 1580,
        },
        {
          text: '常抓常新',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC;',
          color: 'rgba(5, 177, 255, 1)',
          width: 50,
          left: 838,
          top: 1580,
        },
      ],
      imageList: [
        {
          width: 1611,
          height: 747,
          left: 1124,
          top: 354,
          imageAdress: '/assets/images/map.png',
          transparency: 100,
        },
        {
          width: 919,
          height: 358,
          left: 1504,
          top: 1600,
          imageAdress: '/assets/images/pie.png',
          transparency: 100,
        },
      ],
      highChartCssStyle: {
        width: 900,
        height: 350,
        left: 1530,
        top: 1600,
      },
      highChartOption: {
        chart: {
          type: 'pie', //饼图
          backgroundColor: 'rgba(0,0,0,0)',
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0,
          },
        },
        title: {
          text: '测试用', //图表的标题文字
        },
        subtitle: {
          text: '', //副标题文字
        },

        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: 'pointer', //鼠标指针
            depth: 60, //饼图的厚度
            startAngle: 160, // 设置饼图的起始角度
            dataLabels: {
              enabled: true, //是否显示饼图的线形tip
              style: {
                fontSize: '36px', // 设置label字体大小
              },
            },
          },
        },
        series: [
          {
            type: 'pie',
            data: [
              ['火电厂', 9189],
              ['生物质发电厂', 33],
              ['水电站', 4],
              ['自备及余热电站', 157],
              ['风电站', 279],
              ['光电站', 337],
            ],
          },
        ],
      },
    };
  },
  methods: {
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
        'background-image': 'url(' + require('../../static/images/dingcengsheji.png') + ')',
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
.topLevelDesign {
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
    .special_text {
      position: absolute;
      font-size: 36px;
      font-family: PingFangSC, PingFang SC;
      color: #fff;
      left: 3100px;
    }
    .text_one {
      font-family: 'ruizi';
      top: 530px;
    }
    .text_two {
      font-family: 'ruizi';
      top: 790px;
    }
    .text_three {
      font-family: 'ruizi';
      top: 1056px;
    }
    .text_four {
      text-align: left;
      top: 1546px;
    }
    .text_five {
      text-align: left;
      top: 1808px;
    }
    .special_text2 {
      position: absolute;
      font-size: 30px;
      font-family: PingFangSC, PingFang SC;
      color: #fff;
      font-weight: 500;
    }
    .text2_one {
      left: 1280px;
      top: 1280px;
    }
    .text2_two {
      left: 1900px;
      top: 1280px;
    }
    .text2_three {
      left: 2450px;
      top: 1280px;
    }
    .text2_four {
      left: 1280px;
      top: 1456px;
    }
    .text2_five {
      left: 1900px;
      top: 1456px;
    }
    .text2_six {
      left: 2450px;
      top: 1456px;
    }
  }
}
</style>
