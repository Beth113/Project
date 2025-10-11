<script setup>
import NavMenu from "./navMenu.vue";
import Header_ from "./headerNav.vue";
import SearchList from "./searchList.vue";
import topFilter from "./topFilter.vue";
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
          <SearchList />
          <topFilter />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
