import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/", //路径
    name: "Home", //名字
    component: () => import("@/views/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  // 简写，当键值对的键和值都一样则可以这样简写
  routes,
});
export default router;
// 导出
