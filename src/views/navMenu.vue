<script setup>
import { ref } from "vue";
const isCollapse = ref(true);
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
// 动态加载图标
const list = ref([
  {
    id: 1,
    title: "酒店",
    icon: "icon-jiudian",
  },
  {
    id: 2,
    title: "机票",
    icon: "icon-feiji",
  },
  {
    id: 3,
    title: "火车票",
    icon: "icon-huochepiao",
  },
  {
    id: 4,
    title: "旅游",
    icon: "icon-lvyou",
  },
  {
    id: 5,
    title: "景点",
    icon: "icon-jingdianxinxi",
  },
]);
// 引入第三方
</script>

<template>
  <div class="aside-list">
    <el-aside width="200px" class="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false" v-show="isCollapse"
            >|||</el-radio-button
          >
          <el-radio-button :label="true" v-show="!isCollapse"
            >|||</el-radio-button
          >
        </el-radio-group>
        <el-menu-item index="v.id" v-for="v in list" :Key="v.id">
          <i class="iconfont" :class="v.icon"></i>
          <!-- <el-icon><component :is="v.icon"></component></el-icon> -->
          <template #title>{{ v.title }}</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<style scoped></style>
