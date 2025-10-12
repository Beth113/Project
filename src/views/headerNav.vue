<script setup>
import { Search, Avatar, ArrowDown } from "@element-plus/icons-vue";
import { ref } from "vue";
let myOrder = ref([
  { id: 1, name: "酒店订单" },
  { id: 2, name: "飞机票订单" },
  { id: 3, name: "火车票订单" },
  { id: 4, name: "旅游订单" },
  { id: 5, name: "全部订单" },
]);
</script>

<template>
  <div class="headerNav">
    <div class="header-logo">
      <img src="/public/images/logo.png" alt="" />
    </div>
    <div class="header-serach">
      <el-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="请输入内容..."
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
    <div class="header-right">
      <el-link :icon="Avatar">请登录</el-link>
      <el-link target="_blank">注册</el-link>
      <!-- 下拉菜单 -->
      <el-link>
        <el-dropdown>
          <span class="el-dropdown-link">
            我的订单
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in myOrder" :key="item.id">{{
                item.name
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown></el-link
      >
    </div>
  </div>
</template>

<style scoped></style>
