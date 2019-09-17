<template>
<div id='huabu'>
</div>
</template>
<script>
// import * as d3 from 'd3'
// import * as d3chart from '@/components/d3chart.js'
import {d3chart} from '@/components/d3chart.js'
export default {
  mounted () {
    window.sydsj = 1
    // console.log(d3123)
    var option = {
      title: { text: '' },
      tooltip: {},
      xAxis: {
        type: '',
        data: [1, 2, 3, 4, 5]
      },
      yAxis: {
        type: ''
      },
      series: [{
        name: '',
        data: [216, 86, 158, 76, 203],
        type: 'bar'
      }]
    }
    d3chart.init('#huabu')
    d3chart.setOption(option)
  //   const s = document.createElement('script')
  //   s.type = 'text/javascript'
  //   s.src = 'http://d3js.org/d3.v3.min.js'
  //   document.body.appendChild(s)
  //   var width = 400
  //   var height = 400
  //   // 创建画布
  //   var svg = d3.select('div')
  //     .append('svg')
  //     .attr('width', width)
  //     .attr('height', height)
  //   // var svg = d3.select('svg')
  //   //   .attr('width', width)
  //   //   .attr('height', height)
  //   console.log(svg)
  //   var padding = {top: 20, left: 20, right: 20, bottom: 20}
  //   var rectstep = 35 // 矩形的宽带偏白
  //   var rectwidth = 30// 矩形的宽

  //   var dataset = [216, 86, 158, 76, 203]
  //   // 根据数据填充矩形
  //   // var rect =
  //   svg.selectAll('rect')
  //     .data(dataset)
  //     .enter()
  //     .append('rect')
  //     .attr('fill', 'steelblue')
  //     .attr('x', function (d, i) {
  //       return padding.left + i * rectstep
  //     })
  //     .attr('y', function (d, i) {
  //       return height - padding.bottom - d
  //     })
  //     .attr('width', rectwidth)
  //     .attr('height', function (d, i) {
  //       return d
  //     })
  //   // 根据数据填充文本内容
  //   // var text =
  //   svg.selectAll('text')
  //     .data(dataset)
  //     .enter()
  //     .append('text')
  //     .attr('fill', 'white')
  //     .attr('x', function (d, i) {
  //       return padding.left + i * rectstep
  //     })
  //     .attr('y', function (d, i) {
  //       return height - padding.bottom - d
  //     })
  //     .attr('text-anchor', 'middle')
  //     .attr('font-size', '14px')
  //     .attr('dx', rectwidth / 2)
  //     .attr('dy', '1em')
  //     .text(function (d, i) {
  //       return d
  //     })
  }
}
</script>
