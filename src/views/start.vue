<template>
    <div style="width: 100%;height: 100%;">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
         width="400" height="500"> </svg>
         <h1>图表生成工具</h1>
         <router-link to='index'><div class="cssbutton">进入菜单</div></router-link>
    </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  mounted () {
    var svg = d3.select('svg')
    var width = +svg.attr('width')
    var height = +svg.attr('height')
    var color = d3.scaleOrdinal(d3.schemeCategory10)

    var a = {
      id: 'a'
    }
    var b = {
      id: 'b'
    }
    var c = {
      id: 'c'
    }
    var nodes = [a, b, c]
    var links = []

    var simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('link', d3.forceLink(links).distance(200))
      .force('x', d3.forceX())
      .force('y', d3.forceY())
      .alphaTarget(1)
      .on('tick', ticked)

    var g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    var link = g.append('g').attr('stroke', '#000').attr('stroke-width', 1.5).selectAll('.link')
    var node = g.append('g').attr('stroke', '#fff').attr('stroke-width', 1.5).selectAll('.node')

    restart()

    d3.timeout(function () {
      links.push({
        source: a,
        target: b
      }) // Add a-b.
      links.push({
        source: b,
        target: c
      }) // Add b-c.
      links.push({
        source: c,
        target: a
      }) // Add c-a.
      restart()
    }, 1000)

    d3.interval(function () {
      nodes.pop() // Remove c.
      links.pop() // Remove c-a.
      links.pop() // Remove b-c.
      restart()
    }, 2000, d3.now())

    d3.interval(function () {
      nodes.push(c) // Re-add c.
      links.push({
        source: b,
        target: c
      }) // Re-add b-c.
      links.push({
        source: c,
        target: a
      }) // Re-add c-a.
      restart()
    }, 2000, d3.now() + 1000)

    function restart () {
      // Apply the general update pattern to the nodes.
      node = node.data(nodes, function (d) {
        return d.id
      })

      node.exit().transition()
        .attr('r', 0)
        .remove()

      node = node.enter().append('circle')
        .attr('fill', function (d) {
          return color(d.id)
        })
        .call(function (node) {
          node.transition().attr('r', 8)
        })
        .merge(node)

      // Apply the general update pattern to the links.
      link = link.data(links, function (d) {
        return d.source.id + '-' + d.target.id
      })

      // Keep the exiting links connected to the moving remaining nodes.
      link.exit().transition()
        .attr('stroke-opacity', 0)
        .attrTween('x1', function (d) {
          return function () {
            return d.source.x
          }
        })
        .attrTween('x2', function (d) {
          return function () {
            return d.target.x
          }
        })
        .attrTween('y1', function (d) {
          return function () {
            return d.source.y
          }
        })
        .attrTween('y2', function (d) {
          return function () {
            return d.target.y
          }
        })
        .remove()

      link = link.enter().append('line')
        .call(function (link) {
          link.transition().attr('stroke-opacity', 1)
        })
        .merge(link)

      // Update and restart the simulation.
      simulation.nodes(nodes)
      simulation.force('link').links(links)
      simulation.alpha(1).restart()
    }

    function ticked () {
      node.attr('cx', function (d) {
        return d.x
      })
        .attr('cy', function (d) {
          return d.y
        })

      link.attr('x1', function (d) {
        return d.source.x
      })
        .attr('y1', function (d) {
          return d.source.y
        })
        .attr('x2', function (d) {
          return d.target.x
        })
        .attr('y2', function (d) {
          return d.target.y
        })
    }
  }
}
</script>
<style scoped>
div{
  text-align :center;
}
.cssbutton {
    display: inline-block;
    padding: .3em .5em;
    background-image: linear-gradient(#ddd, #bbb);
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow: 0 1px 1px black;
    color:white;
    font-weight: bold;
}
.cssbutton:active{
    box-shadow: .05em .1em .2em rgba(0,0,0,.6) inset;
    border-color: rgba(0,0,0,.3);
    background: #bbb;
}
</style>
