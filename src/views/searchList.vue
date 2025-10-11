<script setup>
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <div class="searchList">
    <div class="search-item">
      <div class="search-box">
        <label for="hotels-destination">目的地/酒店名称</label>
        <input type="text" id="hotels-destination" placeholder="北京" />
      </div>
    </div>
    <div class="search-item">
      <div class="search-box">
        <label for="">入住时间/退房时间</label>
        <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          value-format="YYYY-MM-DD HH:mm:ss"
          :default-time="defaultTime"
        />
      </div>
    </div>
    <div class="search-item">
      <div class="search-box">
        <label for="room-guest">房间及住客</label>
        <input type="text" id="room-guest" placeholder="1间/1位" />
      </div>
    </div>
    <div class="search-item">
      <div class="search-box">
        <label for="keyword">关键词（选填）</label>
        <input type="text" id="keyword" placeholder="火车、酒店名称或区域" />
      </div>
    </div>
    <div class="search-item">
      <el-button type="primary" :icon="Search"></el-button>
    </div>
  </div>
</template>

<style></style>
