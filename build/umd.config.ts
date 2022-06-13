import baseConfig from "./base.config";
import { defineConfig, PluginOption } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
// @ts-ignore
import { pathExistsSync, readFileSync, writeFileSync } from "fs-extra";

function inlineCSS(fileName?: string, dir?: string): PluginOption {
  return {
    name: "varlet-inline-css-vite-plugin",
    apply: "build",
    closeBundle() {
      const cssFile = resolve(dir, "var.css");
      console.info(cssFile);

      if (!pathExistsSync(cssFile)) {
        return;
      }
      const jsFile = resolve("umd", fileName);
      const cssCode = readFileSync(cssFile, "utf-8");
      const jsCode = readFileSync(jsFile, "utf-8");
      const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
      style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(
        /\\/g,
        "\\\\"
      )}\`));\
      var head=document.querySelector('head');head.appendChild(style)})();`;
      writeFileSync(jsFile, `${injectCode}${jsCode}`);
    },
  };
}

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: "umd",
    lib: {
      entry: resolve(__dirname, "../packages/index.ts"),
      name: "xizi",
      formats: ["umd"],
      fileName: (format) => `xizi.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    inlineCSS("xizi.umd.js", "packages"),
    ...(baseConfig as any).plugins,
    dts(),
  ],
});
