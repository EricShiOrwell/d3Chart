<template>
    <div>
    <table width='600px'>
    <tr>
    <th>键</th><th>值</th> <th>键</th><th>值</th> <th>键</th><th>值</th>
    </tr>
    <tr v-for='(index,value) in 10' :key="index">
        <th><el-input v-model="keylist[3*value]" placeholder=""></el-input></th>
        <th><el-input v-model="datalist[3*value]" placeholder=""></el-input></th>
        <th><el-input v-model="keylist[3*value+1]" placeholder=""></el-input></th>
        <th><el-input v-model="datalist[3*value+1]" placeholder=""></el-input></th>
        <th><el-input v-model="keylist[3*value+2]" placeholder=""></el-input></th>
        <th><el-input v-model="datalist[3*value+2]" placeholder=""></el-input></th>
    </tr>
    </table>
    <span>*请从左往右从右往左填写，数据过多请直接导入*</span>
    <br/><br>
    <el-button type="primary">txt导入</el-button>
    <el-button type="primary">excel导入</el-button>
    <el-button type="success" @click="datamessage">生成图表</el-button>
    <button @click="dosome">dianji</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [],
      keylist: []
    }
  },
  methods: {
    datamessage () {
      let keylist = this.keylist
      let datalist = this.datalist
      // for (let key in keylist) {
      //   if (keylist[key] !== undefined && datalist[key] !== undefined) {
      //     sessionStorage.setItem(keylist[key], datalist[key])
      //   }
      // }
      sessionStorage.setItem('keylist', keylist)
      sessionStorage.setItem('datalist', datalist)
      this.$router.push('/success')
    },
    dosome () {
      console.log(this.datalist)
      console.log(this.keylist)
    }
  }
}
</script>
