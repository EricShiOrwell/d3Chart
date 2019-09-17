<template>
  <div>
    <el-container>
      <el-header><el-page-header @back="goBack" content="数据导入"></el-page-header></el-header>
      <el-main><router-view/></el-main>
      <el-footer>
        <!-- <el-button type="primary">txt导入</el-button>
        <el-button type="primary">excel导入</el-button>
        <el-button type="success">生成图表</el-button> -->
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.push('/mouldselect')
    }

  }
//   option = {
//     xAxis: {
//         type: 'category',
//         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [820, 932, 901, 934, 1290, 1330, 1320],
//         type: 'line'
//     }]
// };
}
</script>
