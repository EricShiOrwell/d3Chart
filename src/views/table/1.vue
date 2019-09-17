<template>
<el-row>
  <el-col :span="4" :offset="2">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="@/assets/bar-simple.jpg" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
            <span>简单柱状图</span>
          <el-button type="text" class="button" @click="onSubmit('简单柱状图')">数据导入</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="4" :offset="2">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="@/assets/bar-negative2.jpg" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
            <span>交错正负轴标签</span>
          <el-button type="text" class="button">数据导入</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onSubmit: function (a) {
      sessionStorage.setItem('tablename', '简单柱状图')
      this.$router.push('/datainput')
    }
  }
}
</script>
<style scoped>
 /* body{
     background-color: #545c64;
 } */
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
