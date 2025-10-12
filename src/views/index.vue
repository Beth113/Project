<script setup>
import NavMenu from "./navMenu.vue";
import Header_ from "./headerNav.vue";
import SearchList from "./searchList.vue";
import topFilter from "./topFilter.vue";
import recommend from "./recommend.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧导航栏 -->
      <NavMenu />
      <el-container class="cc" direction="vertical">
        <Header_ />
        <el-main>
          <!-- 主要内容区域 -->
          <!-- 搜索栏 -->
          <SearchList />
          <!-- 筛选 -->
          <topFilter />
          <recommend />
          <!-- 推荐区域 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
