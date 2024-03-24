<template>
  <div class="text" :style="styleColor">{{ timestr }}</div>
</template>
<script>
export default {
  name: 'customTime', // 自定义时间
  props: {
    options: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      timestr: '',
    };
  },
  computed: {
    styleColor() {
      return {
        fontSize: this.options.fontSize ? this.options.fontSize + 'px' : '14px',
        color: this.options.color ? this.options.color : '#c9d6ff',
        position: 'absolute',
        left: this.options.left ? this.options.left + 'px' : '0px',
        top: this.options.top ? this.options.top + 'px' : '0px',
      };
    },
  },
  mounted() {
    this.getTime();
  },
  methods: {
    formatFunction(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
      };
      for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
      }
      return fmt;
    },
    check(val) {
      if (val < 10) {
        return '0' + val;
      } else {
        return val;
      }
    },
    formatWeek(date, fmt) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      let dayCycle = date.getDay();
      const dayCycleArray = ['日', '一', '二', '三', '四', '五', '六'];
      for (let i = 0; i < 7; i++) {
        if (dayCycle == i) {
          dayCycle = ' 星期' + dayCycleArray[i];
        }
      }
      if (fmt == 'year-week') {
        return year + '-' + month + '-' + day + dayCycle;
      } else if (fmt == 'year-h-m-week') {
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + dayCycle;
      } else if (fmt == 'year-h-m-s-week') {
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + dayCycle;
      } else if (fmt == 'week') {
        return dayCycle;
      }
    },
    displayTime() {
      this.timestr =
        this.options.timeFormat.indexOf('week') > -1
          ? this.formatWeek(new Date(), this.options.timeFormat)
          : this.formatFunction(new Date(), this.options.timeFormat);
    },
    getTime() {
      setInterval(() => {
        this.displayTime();
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.text {
  width: auto;
  height: auto;
}
</style>
