<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item >
            <i class="el-icon-s-home"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item name="addOrder" index="2-1" @click="toDo(this.name)">新建订单</el-menu-item>
              <el-menu-item index="2-2">查看订单</el-menu-item>
              <el-menu-item index="2-3">搜索订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
<!--          <el-menu-item index="3">-->
<!--            <i class="el-icon-location"></i>-->
<!--            <span slot="title">导航三</span>-->
<!--          </el-menu-item>-->
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <h1>span=21</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    toDo (view) {

    }
  }
}
</script>

<style scoped>

</style>
