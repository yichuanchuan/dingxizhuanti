<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-22 17:13:17
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="entrancePage">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <!-- 返回 -->
        <img src="/assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <div class="vertical_text">
          <span class="vertical_text_other">“薯”</span><span class="vertical_text_other">光</span>·定西马铃薯零碳生态村落示范基地
        </div>
        <div class="vertical_text2">村级光伏扶贫电站<span class="vertical_text_other">3777</span>座</div>
        <div class="vertical_text3">风光·千乡万村驭风行 千家万户沐阳光</div>
        <div class="back_button jishi" @click="toRouter('/footstone')"></div>
        <div class="back_button yidaoliang" @click="toRouter('/footstone')"></div>
        <div class="back_button yimianqiang" @click="toRouter('/aWall')"></div>
        <div class="back_button yishanchuang" @click="toRouter('/footstone')"></div>
        <div class="back_button yishanchuang2" @click="toRouter('/footstone')"></div>
        <div class="back_button yishuguang" @click="toRouter('/footstone')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
export default {
  name: 'entrancePage',
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
.entrancePage {
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

    .vertical_text {
      position: absolute;
      left: 54px;
      top: 680px;
      font-size: 36px;
      font-weight: 500;
      color: #a6daf5;
      font-family: SourceHanSansCN, SourceHanSansCN;
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 14px;
      .vertical_text_other {
        letter-spacing: 4px;
        writing-mode: horizontal-tb;
        color: #fbce19;
      }
    }
    .vertical_text2 {
      position: absolute;
      left: 3638px;
      top: 860px;
      font-size: 36px;
      font-weight: 500;
      color: #a6daf5;
      font-family: SourceHanSansCN, SourceHanSansCN;
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 14px;
      .vertical_text_other {
        letter-spacing: 4px;
        writing-mode: horizontal-tb;
        color: #fbce19;
      }
    }
    .vertical_text3 {
      position: absolute;
      left: 3755px;
      top: 670px;
      font-size: 36px;
      font-weight: 500;
      color: #a6daf5;
      font-family: SourceHanSansCN, SourceHanSansCN;
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 14px;
      .vertical_text_other {
        writing-mode: horizontal-tb;
        color: #fbce19;
      }
    }
    .back_button {
      background-size: 100% 100%;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
    .jishi {
      width: 1980px;
      height: 870px;
      position: absolute;
      top: 1288px;
      left: 961px;
      background: url('./images/jishi.png');
    }
    .yimianqiang {
      width: 1090px;
      height: 220px;
      position: absolute;
      top: 994px;
      left: 1375px;
      background: url('./images/yimianqiang.png');
    }
    .yidaoliang {
      width: 859px;
      height: 96px;
      position: absolute;
      top: 412px;
      left: 1491px;
      background: url('./images/yidaoliang.png');
    }
    .yishuguang {
      width: 566px;
      height: 234px;
      position: absolute;
      top: 542px;
      left: 1644px;
      background: url('./images/yishuguang.png');
    }
    .yishanchuang {
      width: 419px;
      height: 346px;
      position: absolute;
      top: 854px;
      left: 721px;
      background: url('./images/yishanchuang.png');
    }
    .yishanchuang2 {
      width: 404px;
      height: 350px;
      position: absolute;
      top: 871px;
      left: 2724px;
      background: url('./images/yishanchuang2.png');
    }
  }
}
</style>
