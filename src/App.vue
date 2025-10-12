<script setup></script>

<template>
  <router-view />
</template>

<style>
/* 强制重置所有高度 */
html,
body {
  height: 100vh !important; /* 使用视口高度 */
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden; /* 防止外层滚动 */
  min-width: 1280px; /* 设置最小宽度 */
}

#app {
  height: 100vh !important;
  min-width: 1280px; /* 设置最小宽度 */
  overflow-y: auto;
}
</style>
