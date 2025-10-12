<script setup>
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
let topFilterList = ref([
  {
    id: 1,
    name: "first",
    label: "热门筛选",
    list: ["天安门广场", "王府井", "北京大学"],
  },
  {
    id: 1,
    name: "second",
    label: "机场车站",
    list: ["北京南站", "北京西站", "北京火车站"],
  },
  {
    id: 1,
    name: "third",
    label: "商业区",
    list: ["三里屯", "国贸地区", "西直门"],
  },
  {
    id: 1,
    name: "fourth",
    label: "景点",
    list: ["什刹海", "前门大街", "五道口"],
  },
]);
let priceList = ref([
  { id: 1, location: "五星(钻级)" },
  { id: 2, location: "四星(钻级)" },
]);
let filterList = ref([
  { title: "早餐", list: ["含早餐", "单份早餐", "双份早餐"] },
  { title: "支付方式", list: ["在线付款", "到店付款", "闪住"] },
  {
    title: "房型",
    list: ["双床房", "三床房", "单人床房", "大床房", "特大床房"],
  },
  { title: "酒店设施", list: ["免费停车", "室内游泳", "室内健身房"] },
]);
</script>

<template>
  <div class="topFilter">
    <div class="location-box">
      <h4>位置区域</h4>
    </div>
    <div class="topFilter-location">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane
          :label="v.label"
          :name="v.name"
          v-for="v in topFilterList"
          :key="v.id"
        >
          <!-- 外层循环使用了v之后内层就不可使用，且访问的数组也是由外层变量访问 -->
          <el-button
            v-for="(k, i) in v.list"
            :key="i"
            size="small"
            type="info"
            plain
            >{{ k }}</el-button
          >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div><h4>星级价格</h4></div>
    <div class="topFilter-price">
      <el-button
        v-for="v in priceList"
        :key="v.id"
        size="small"
        type="info"
        plain
        >{{ v.location }}</el-button
      >
    </div>
    <div><h4>高级筛选</h4></div>
    <div class="topFilter-filter">
      <el-dropdown v-for="(v, i) in filterList" :key="i">
        <span class="el-dropdown-link">
          {{ v.title }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(k, i) in v.list" :key="i">{{
              k
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped></style>
