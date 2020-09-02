<template>
  <el-container class="box">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/heros">
            <i class="el-icon-menu"></i>
            <span slot="title">英雄管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">武器管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">装备管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.box{
  height: 100%;
}
.header{
  background: #000;
  color: #fff;
  line-height: 60px
}
.aside{
  height: 100%;
  background-color: #D3DCE6;
  color: #333;
}
.main{
  background-color: #E9EEF3;
  color: #333;
  height: 100%;
}
.el-menu-vertical-demo{
  height: 100%;
}
</style>
