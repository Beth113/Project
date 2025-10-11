<script setup>
import { ref } from "vue";
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
</script>

<template>
  <div class="topFilter">
    <div>
      <h4>位置区域</h4>
    </div>
    <div>
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
    <div>
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
    <div>6</div>
  </div>
</template>

<style scoped></style>
