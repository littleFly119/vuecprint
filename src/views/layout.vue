<template>
  <el-container>
    <el-header height="88px">
      <cprintHeader></cprintHeader>
    </el-header>
    <el-main class="container">
      <router-view/>
    </el-main>
    <el-footer height="68px">
      ©2010-{{nowyear}} 版权所有 杭州联创信息技术有限公司 V3.0.20220822
    </el-footer>
  </el-container>
</template>

<script>
  import cprintHeader from "@/components/cprintHeader"
  export default {
    name: "layout",
    components:{
      cprintHeader
    },
    data(){
      return {
        nowyear:new Date().getFullYear()
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  .el-header, .el-footer {
    background-color: #333333;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    font-size: 14px;
    color: #ffffff;
  }

  .el-main {
    background-color: #f1f1f1;
    color: #333;

  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
