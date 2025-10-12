<script setup>
import { ref } from "vue";
let bannerList = ref([
  { id: 1, img_url: "banner-1.jpg" },
  { id: 2, img_url: "banner-2.jpg" },
  { id: 3, img_url: "banner-3.jpg" },
]);
</script>
<template>
  <div class="banner">
    <div class="block text-center">
      <el-carousel height="620px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="`/public/images/${item.img_url}`" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped></style>
