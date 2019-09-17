<template>
<el-container :style="'height:'+htmlheight">
  <el-header style='text-align:right'>图表生成工具样式选择</el-header>
  <el-container>
    <el-aside width="200px">
   <div>
    <el-menu  background-color="#545c64"
      default-active="0" router>
      <el-menu-item v-for='(value,index) in pages' :index='index.toString()' :key='index'>
        <i class="el-icon-pie-chart"></i>
        <span slot="title">{{value}}</span>
      </el-menu-item>
    </el-menu>
    </div>
    </el-aside>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  data () {
    return {
      htmlheight: document.documentElement.clientHeight + 'px',
      pages: [
        '折线图',
        '条形图',
        '折线图',
        '饼图',
        '散点图',
        '地图',
        '热力图',
        '关系图'
      ]
    }
  }
}
</script>
