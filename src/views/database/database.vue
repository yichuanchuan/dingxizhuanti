<template>
  <div class="footstone">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/next.png" alt="" class="over_image" @click="$router.push({ path: '/weather' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 表格 -->
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
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="11" background
            layout="total,  prev, pager, next, jumper"
            :total="3075">
          </el-pagination>
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
          text: '数据湖和 知识库',
          fontSize: 100,
          fontFamily: 'yaoshe',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          width: 408,
          left: 824,
          top: 581,
          letterSpacing: 10,
          lineHeight: 130,
        },
        {
          text: 'XGBOOST',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          width: 316,
          left: 381,
          top: 333,
          letterSpacing: 5,
        },
        {
          text: 'LIGHTGBM',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          width: 337,
          left: 106,
          top: 845,
          letterSpacing: 5,
        },
        {
          text: 'CATBOOST',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          letterSpacing: 5,
          width: 360,
          left: 540,
          top: 1366,
        },
        {
          text: 'LSTM',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          letterSpacing: 5,
          width: 183,
          left: 1472,
          top: 1365,
        },
        {
          text: '... ...',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          letterSpacing: 5,
          textAlign: 'center',
          color: '#CDEEFF',
          width: 130,
          left: 1745,
          top: 789,
        },
        {
          text: '多层神经网络',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          letterSpacing: 5,
          width: 333,
          left: 1410,
          top: 341,
        },
        {
          text: 'K-Means',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          letterSpacing: 5,
          width: 312,
          left: 344,
          top: 1729,
        },
        {
          text: '随机森林',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          textAlign: 'center',
          color: '#CDEEFF',
          letterSpacing: 5,
          width: 250,
          left: 914,
          top: 1729,
        },
        {
          text: '... ...',
          fontSize: 50,
          fontFamily: 'zaozi',
          fontWeight: 500,
          letterSpacing: 5,
          textAlign: 'center',
          color: '#CDEEFF',
          width: 130,
          left: 1513,
          top: 1729,
        },
        {
          text: '6000余万条数据',
          fontSize: 66,
          fontFamily: 'zaozi',
          fontWeight: 500,
          letterSpacing: 6,
          textAlign: 'center',
          color: '#CDEEFF',
          width: 600,
          left: 720,
          top: 1915,
        },
        // {
        //   text: '有效解决数据源单一、光伏站点位置分散、设备参数差异大、历史数据质量参差不齐等问题，为供电所台区可视可测、发电功率精准预测等提供了数据基座。',
        //   fontSize: 44,
        //   fontFamily: 'PingFangSC, PingFang SC',
        //   fontWeight: 500,
        //   textAlign: 'left',
        //   color: '#7BB3E6',
        //   width: 1600,
        //   left: 2097,
        //   top: 1875,
        //   lineHeight: 62
        // },
      ],
      predictionList: [
        [
          {
            text: '变电站',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '线路名称',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '站点名称',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '接入电压 等级(v)',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '装机 容量(kW)',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '并网变电站 及10kv线路',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '140px',
            padding: '0 70px',
          },
          {
            text: '并网点',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '是否为 村级电站',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是否为 扶贫电站',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '状态',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv宁远变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv宁远变 115…',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '黄金胜',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv宁远变35kv……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv宁远变 115…',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv鲁家沟变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '黄磐华',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv鲁家沟变35……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv宁远变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv宁远变 115…',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '黄建成',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv宁远变35kv……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv宁远变 115…',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv宁远变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv宁远变 115…',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '黄世雄',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv宁远变35kv……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv宁远变 115…',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv鲁家沟变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '麻玉和',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv鲁家沟变35……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv鲁家沟变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '麻润成',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv鲁家沟变35……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv鲁家沟变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '麻守远',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv鲁家沟变35……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv鲁家沟变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '麻守军',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv鲁家沟变35……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '110kv西郊变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '110kv西郊变 122……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '鲍菊萍',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '4',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '110kv西郊变110……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '110kv西郊变 122……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
        [
          {
            text: '35kv鲁家沟变',
            fontSize: '24px',
            color: '#A4B3CD',
            fontWeight: 500,
            width: '180px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '177px',
          },
          {
            text: '魏英',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '144px',
          },
          {
            text: '220v',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '125px',
          },
          {
            text: '3',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '143px',
          },
          {
            text: '35kv鲁家沟变35……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '280px',
          },
          {
            text: '35kv鲁家沟变 115……',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '173px',
          },
          {
            text: '否',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 15px',
          },
          {
            text: '是',
            fontSize: '24px',
            color: '#A4B3CD',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '100px',
            padding: '0 30px',
          },
          {
            text: '已投运',
            fontSize: '24px',
            color: '#A6B74F',
            borderLeft: '1px solid #3F5B6F',
            fontWeight: 500,
            width: '115px',
          },
        ],
      ],
      currentPage: 1
    }
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
      width: 1630px;
      height: 1242px;
      top: 526px;
      left: 2080px;
      background: url('./images/table.png');
      .prediction_item {
        display: flex;
        .prediction_item_text {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 112px;
          line-height: 33px;
        }
      }
    }
    .pagination {
      transform: scale(2.2);
      position: absolute;
      top: 1858px;
      left: 2723px;
      /deep/.el-pagination__total {
        color: #BCE3FF;
        font-size: 16px;
      }
      /deep/.el-pagination__jump {
        color: #B8B8B8;
        font-size: 12.7px;
      }
    }
  }
}
</style>
