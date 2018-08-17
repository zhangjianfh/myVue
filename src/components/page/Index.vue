<template>
  <div class="content" id="index">
    <div class="echart" ref="mychart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')// 引入柱状图
require('echarts/lib/component/tooltip')// 引入提示框和标题组件
require('echarts/lib/component/title')// 引入提示框和标题组件
export default {
  name: 'Index',
  data () {
    return {
      msg: '首页',
      iChart: {}
    }
  },
  created () {},
  mounted () {
    this.setEchart()
  },
  computed: {
    opt () {
      let obj = {
        color: ['#409EFF','#35affb'],
        title: {
          text: '一周数据统计'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        xAxis: {
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
        },
        yAxis: {},
        series: [{
          name: '注册',
          type: 'bar',
          barWidth:30,
          data: [5, 20, 36, 10, 10, 20, 28]
        },
        {
          name: '活跃',
          type: 'bar',
          barWidth:30,
          data: [15, 30, 36, 11, 18, 22, 28]
        }]
      }
      return obj
    }
  },
  methods: {
    setEchart () {
      let dom = this.$refs.mychart
      this.iChart = echarts.init(dom)
      this.iChart.setOption(this.opt)
    }
  }
}
</script>

<style>
.echart{position:relative; width:100%; height:300px;}
</style>
