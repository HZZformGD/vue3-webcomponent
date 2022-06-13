import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
// @ts-ignore
import { pathExistsSync, readFileSync } from "fs-extra";

const cssFile = resolve(__dirname, "../packages/var.css");
let injectCode = "";
if (!pathExistsSync(cssFile)) {
  injectCode = "";
}
const cssCode = readFileSync(cssFile, "utf-8");
injectCode = `<script>;(function(){var style=document.createElement('style');style.type='text/css';\
style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(
  /\\/g,
  "\\\\"
)}\`));\
var head=document.querySelector('head');head.appendChild(style)})();</script>`;



 

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      "@packages": resolve(__dirname, "../packages"),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/, /\.mdx$/],
      template: {
        compilerOptions: {
          // 将所有包含短横线的标签作为自定义元素处理
          isCustomElement: (tag: string) => tag.startsWith("xizi-"),
        },
      },
    }),
    Markdown(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "index",
          injectScript: injectCode,
        },
      },
    }),
   ],
});
