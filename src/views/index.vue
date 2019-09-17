<template>
<el-container :style="'height:'+htmlheight">
  <el-header style='text-align:right'>图表生成工具主菜单</el-header>
  <el-container>
    <el-aside width="200px">
    <el-menu  background-color="white"
      default-active="/mouldselect" router>
      <el-menu-item index="/mouldselect">
        <i class="el-icon-menu"></i>
        <span slot="title">快速生成</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">可视化定制</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">js使用介绍</span>
      </el-menu-item>
    <!-- <el-menu-item>
      <router-link to="mouldselect" target="_blank">产品借出表</router-link>
    </el-menu-item> -->
    </el-menu>
    </el-aside>
    <el-main>Main<div id='workspace'></div>
    <div id="canvas">
   <iframe src='../static/1.html' width='100%' height='600px' FrameBorder=0></iframe>
  </div></el-main>
  </el-container>
</el-container>
</template>
<script>
// import * as d3 from 'd3'
export default {
  data () {
    return {
      htmlheight: document.documentElement.clientHeight + 'px'
    }
  },
  methods: {
    // 返回随机颜色代码
  //   random_color () {
  //     var letters = '0123456789ABCDEF'.split('')
  //     var color = '#'
  //     for (var i = 0; i < 6; i++) {
  //       color += letters[Math.round(Math.random() * 15)]
  //     }
  //     return color
  //   }
  // }
  // mounted () {
  //   var graph = {'nodes': [{'name': 'nodeA'},
  //     {'name': 'nodeB'},
  //     {'name': 'nodeC'},
  //     {'name': 'nodeD'},
  //     {'name': 'nodeE'},
  //     {'name': 'nodeF'}],
  //   'links': [{'source': 0, 'target': 1},
  //     {'source': 0, 'target': 2},
  //     {'source': 0, 'target': 3},
  //     {'source': 0, 'target': 4},
  //     {'source': 0, 'target': 5}]}
  //   function draw () {
  //     var width = 400
  //     var height = 300
  //     // 设置svg宽度和高度
  //     var svg = d3.select('#canvas svg')
  //       .attr('width', width)
  //       .attr('height', height)
  //     // 设置Force-Directed力参数
  //     var force = d3.layout.force()
  //       .gravity(0.05)
  //       .distance(120)
  //       .charge(-100)
  //       .size([width, height])
  //     force
  //       .nodes(graph.nodes)
  //       .links(graph.links)
  //       .start()
  //     // 选择边集合
  //     var link = svg.selectAll('.link')
  //       .data(graph.links)
  //       .enter().append('line')
  //       .attr('class', 'link')
  //     // 选择节点集合
  //     var node = svg.selectAll('.node')
  //       .data(graph.nodes)
  //       .enter().append('g')
  //       .attr('class', 'node')
  //       .call(force.drag) // 响应鼠标拖拽事件
  //     // 节点添加圆形图案
  //     node.append('svg:circle').attr('r', 10)
  //       .style('fill', function () {
  //         return this.random_color()
  //       })
  //       .style('stroke', '#FFF').style('stroke-width', 3)
  //     node.append('text')
  //       .attr('dx', 12)
  //       .attr('dy', '.36em')
  //       .text(function (d) { return d.name })
  //     // 绑定tick事件
  //     force.on('tick', function () {
  //       link.attr('x1', function (d) { return d.source.x })
  //         .attr('y1', function (d) { return d.source.y })
  //         .attr('x2', function (d) { return d.target.x })
  //         .attr('y2', function (d) { return d.target.y })
  //       node.attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
  //     })
  //   }
  //   draw()
  }
}
</script>
<style scoped>
.link {
  stroke : #CCC;
  stroke-width : 2;
}
.node text {
  pointer-events : none;
  font-size : 12px;
}
svg { overflow : hidden; }
</style>
