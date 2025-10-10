import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/

export default defineConfig({
  // 设置 @ 为 src 目录的别名，简化导入路径
  // 是 Vite 配置的一个属性，用于配置模块解析规则
  resolve: {
    // alias 对象是 resolve 的子属性，用于定义路径别名映射
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
