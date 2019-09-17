import * as d3 from 'd3'
var d3chart = {
  // 创建画布
  svg: Object,
  option: {
    title: { text: '' },
    tooltip: {},
    legend: {
      data: []
    },
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
      type: ''
    }]
    // option: {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [{
    //     data: [820, 932, 901, 934, 1290, 1330, 1320],
    //     type: 'line'
    //   }]
  },
  // 初始化画布
  init: function (dom, width, height) {
    // dom 可以为id或clas也可以直接是dom节点
    if (isElement(dom)) {
      dom.setAttribute('id', 'd3huabu')
      this.svg = d3.select('#d3huabu').append('svg')
    } else if (typeof (dom) === 'string') {
      this.svg = d3.select(dom).append('svg')
    } else {
      console.log('error: 初始化失败')
    }
    this.svg.attr('width', !width ? 500 : width)
      .attr('height', !height ? 500 : height)
  },
  // 执行生成图表的步骤
  setOption: function (option) {
    zuobiaoxiX(option)
    for (let serie of option.series) {
      switch (serie.type) {
        case 'line' : {
          break
        }
        case 'bar' : {
          zhuzhuangtu(serie)
          break
        }
        default:
      }
    }
  }
  //   const s = document.createElement('script')
  //   s.type = 'text/javascript'
  //   s.src = 'http://d3js.org/d3.v3.min.js'
  //   document.body.appendChild(s)
}
function isElement (obj) {
  return (typeof HTMLElement === 'object')
    ? (obj instanceof HTMLElement)
    : !!(obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string')
}
// 生成坐标系
function zuobiaoxiX (option) {
  var padding = {top: 20, left: 20, right: 20, bottom: 20}
  let height = d3chart.svg.attr('height')
  let width = d3chart.svg.attr('width')
  let x = d3.scaleBand().range([0, width - padding.left - padding.right])
    .domain(option.xAxis.data)
  d3chart.svg.append('g')
    .attr('class', 'xAxis')
    .attr('transform', `translate(${padding.left}, ${height - padding.bottom})`)
    .call(d3.axisBottom(x))
  // let y = d3.scaleLinear().range([0, height - padding.bottom - padding.top])
  // .domain()
}
function zhuzhuangtu (serie) {
  var padding = {top: 20, left: 20, right: 20, bottom: 20}
  let height = d3chart.svg.attr('height')
  let width = d3chart.svg.attr('width')
  var dataset = serie.data
  var rectstep = (width - padding.left - padding.right) / (dataset.length) // 矩形的宽带偏白
  var rectwidth = 40// 矩形的宽
  var linear = d3.scaleLinear()
    .domain([0, 1.5 * d3.max(dataset)])
    .range([0, height - padding.bottom - padding.top])
  d3chart.svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('fill', 'steelblue')
    .attr('x', function (d, i) {
      return padding.left + (i + 0.5) * rectstep - 0.5 * rectwidth
    })
    .attr('y', function (d, i) {
      return height - padding.bottom - linear(d)
    })
    .attr('width', rectwidth)
    .attr('height', function (d, i) {
      return linear(d)
    })
  // 根据数据填充文本内容
  // var text =
  d3chart.svg.selectAll('text.mark')
    .data(dataset)
    .enter()
    .append('text')
    .attr('fill', 'white')
    .attr('x', function (d, i) {
      return padding.left + (i + 0.5) * rectstep - 0.5 * rectwidth
    })
    .attr('y', function (d, i) {
      return height - padding.bottom - linear(d)
    })
    .attr('text-anchor', 'middle')
    .attr('font-size', '14px')
    .attr('dx', rectwidth / 2)
    .attr('dy', '1em')
    .text(function (d, i) {
      return d
    })
}
export {d3chart}
