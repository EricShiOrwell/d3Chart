<template>
<el-container>
  <el-header style="text-align: right">图表生成与修正</el-header>
  <el-container>
    <el-container>
      <el-main><div id='huabu'></div></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <el-aside width="600px">Aside</el-aside>
  </el-container>
</el-container>
</template>
<script>
import {d3chart} from '@/components/d3chart.js'
export default {
  data () {
    return {

    }
  },
  mounted () {
    var option = {
      title: { text: '' },
      tooltip: {},
      xAxis: {
        type: '',
        data: []
      },
      yAxis: {
        type: ''
      },
      series: [{
        name: '',
        data: [],
        type: 'bar'
      }]
    }
    var x = sessionStorage.getItem('keylist').split(',')
    var y = sessionStorage.getItem('datalist').split(',')
    for (let key in x) {
      if (x[key] && y[key]) {
        option.xAxis.data.push(x[key])
        option.series[0].data.push(y[key])
      }
    }
    console.log(option.xAxis.data)
    d3chart.init('#huabu')
    d3chart.setOption(option)
  }
}
</script>
