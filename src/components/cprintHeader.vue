<template>
    <div class="container header_container">
      <div class="part1"><img src="@/assets/logo.png" alt=""></div>
      <div class="part1">
        <el-button type="text">中文</el-button>/
        <el-button type="text">English</el-button>
      </div>
      <el-button class="part1" type="primary">登录<i class="el-icon-upload"></i></el-button>
    </div>
</template>

<script>
    export default {
        name: "cprintHeader"
    }
</script>

<style scoped>
.header_container {
  display: flex;
  align-items: center;
  justify-items: center;
}
.header_container .part1{
  height: 100%;
}
.header_container .part1:nth-child(1){
  background-color: pink;
  }
.header_container .part1:nth-child(2){
  background-color: pink;
}
.header_container .part1:nth-child(3){
  background-color: pink;
}
</style>
