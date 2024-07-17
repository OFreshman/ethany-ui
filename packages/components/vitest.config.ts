/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 测试文件虚拟dom需要一些JSX语法，比如解构
import vueJSX from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJSX()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
