import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      packages: resolve(__dirname, "./packages"),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/, /\.mdx$/],
      template: {
        compilerOptions: {
          // 将所有包含短横线的标签作为自定义元素处理
          isCustomElement: (tag) => tag.startsWith("xizi-"),
        },
      },
    }),
    Markdown(),
  ],
});
