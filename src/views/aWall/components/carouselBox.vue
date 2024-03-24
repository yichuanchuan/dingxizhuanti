<template>
  <div class="carouselBox">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <div class="swiper_item">
          <span class="swiper_item_title">{{ item.title }}</span>
          <div class="swiper_item_text1">
            总高警数： <span style="color: rgba(18, 233, 208, 1); font-size: 30px">{{ item.text1 }} 个</span>
          </div>
          <div class="swiper_item_text2">
            未完成数： <span style="color: rgba(252, 181, 43, 1); font-size: 30px">{{ item.text2 }} 个</span>
          </div>
          <div class="swiper_item_text3">
            已督办数： <span style="color: rgba(252, 181, 43, 1); font-size: 30px">{{ item.text3 }} 个</span>
          </div>
          <div class="swiper_item_text4">
            整改完成： <span style="color: rgba(18, 233, 208, 1); font-size: 30px">{{ item.text4 }} %</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperList: [
        {
          title: '网上电网在线监测',
          text1: '2761',
          text2: '3',
          text3: '243',
          text4: '99.09',
        },
        {
          title: '2021年典型数据在线监测',
          text1: '9270',
          text2: '24',
          text3: '2',
          text4: '99.74',
        },
        {
          title: '电能质量在线监测',
          text1: '142',
          text2: '0',
          text3: '77',
          text4: '100',
        },
        {
          title: '2023年客户基础档案治理',
          text1: '1192',
          text2: '117',
          text3: '0',
          text4: '90.18',
        },
        {
          title: '同期线损在线监测',
          text1: '5072',
          text2: '0',
          text3: '871',
          text4: '100',
        },
        {
          title: '2023年量测数据治理',
          text1: '7',
          text2: '7',
          text3: '0',
          text4: '0',
        },
        {
          title: '网上电网在线监测',
          text1: '1940',
          text2: '29',
          text3: '0',
          text4: '90.51',
        },
        {
          title: '多维精益在线监测',
          text1: '1639',
          text2: '5',
          text3: '159',
          text4: '99.69',
        },
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 1,
        autoplay: { delay: 6000 },
        spaceBetween: 10,
      },
    };
  },
};
</script>

<style lang="scss">
.carouselBox {
  width: 2078px;
  position: absolute;
  bottom: 238px;
  left: 1006px;
  .swiper_item {
    width: 504px;
    margin: 0 8px;
    height: 444px;
    font-size: 50px;
    color: #fff;
    background: url('../images/itembg.png');
    position: relative;
    .swiper_item_title {
      font-family: yaoshe;
      position: absolute;
      top: 24px;
      left: 66px;
      font-size: 32px;
      color: rgba(205, 238, 255, 1);
    }
    .swiper_item_text1 {
      font-family: siyuan;
      position: absolute;
      top: 124px;
      left: 35px;
      color: rgba(116, 184, 234, 1);
      font-size: 28px;
    }
    .swiper_item_text2 {
      font-family: siyuan;
      position: absolute;
      top: 189px;
      left: 35px;
      color: rgba(116, 184, 234, 1);
      font-size: 28px;
    }
    .swiper_item_text3 {
      font-family: siyuan;
      position: absolute;
      top: 254px;
      left: 35px;
      color: rgba(116, 184, 234, 1);
      font-size: 28px;
    }
    .swiper_item_text4 {
      font-family: siyuan;
      position: absolute;
      top: 319px;
      left: 35px;
      color: rgba(116, 184, 234, 1);
      font-size: 28px;
    }
  }
}
</style>
