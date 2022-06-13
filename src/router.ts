import { createRouter, createWebHashHistory, RouterOptions } from "vue-router";
// @ts-ignore
import Button from "@packages/Button/docs/README.md";
// @ts-ignore
import Row from "@packages/Row/docs/README.md";
const routes = [
  {
    path: "/",
    redirect: "/components/Button",
  },
  {
    title: "按钮",
    name: "Button",
    path: "/components/Button",
    component: Button,
  },
  {
    title: "Grid",
    name: "Row",
    path: "/components/Row",
    component: Row,
  },
];

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  //   scrollBehavior(to: any, from: any) {
  //     if (to.path !== from.path) {
  //       return { top: 0 };
  //     }
  //   },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;
