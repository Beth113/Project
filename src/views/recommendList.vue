<script setup>
import { ref } from "vue";
let titleList = ref([
  {
    id: 1,
    title: "北京首都宾馆",
    img_url: "1.jpg",
    img1_url: "star5.png",
    img2_url: "help.png",
    transport: "天安门/王府井 | 距市中心直线310米",
    list: ["网球场", "桌球室", "免费停车", "健身室"],
  },
  {
    id: 2,
    title: "北京京伦饭店",
    img_url: "2.jpg",
    img1_url: "star5.png",
    img2_url: "help.png",
    transport: "天安门/王府井 | 距市中心直线310米",
    list: ["网球场", "桌球室", "免费停车", "健身室"],
  },
]);
</script>

<template>
  <div class="recommendList">
    <ul>
      <li v-for="v in titleList" :key="v.id">
        <div class="list-left">
          <div class="list-left-img">
            <img :src="`/public/images/${v.img_url}`" alt="" />
          </div>
          <div class="list-left-title">
            <div class="list-left-tagandtitle">
              <h4>{{ v.title }}</h4>
              <img :src="`/public/images/${v.img1_url}`" />
              <img :src="`/public/images/${v.img2_url}`" alt="" />
            </div>
            <div class="list-left-transport">
              <p>{{ v.transport }}</p>
            </div>
            <div class="list-left-tag">
              <el-tag
                type="danger"
                effect="plain"
                v-for="(k, i) in v.list"
                :key="i"
                >{{ k }}</el-tag
              >
            </div>
          </div>
        </div>
        <div class="list-right">
          <div class="list-right-comment">
            <div class="list-right-describe">
              <p>好</p>
              <a href="#">3333条点评</a>
            </div>
            <div class="list-right-score">
              <p>4.5</p>
            </div>
          </div>
          <div class="list-right-price">
            <p>$222</p>
            <el-button type="primary">查看详情</el-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
