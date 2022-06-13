import { defineCustomElement } from "vue";
import component from "./src/index.ce.vue";

export default {
  name: component.name,
  customElement: defineCustomElement(component),
  component: component,
};
