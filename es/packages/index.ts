/* eslint-disable */

/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
//  import { App, Plugin } from 'vue';

//  import { ButtonPlugin } from './Button';
import Button from "./Button";
import Row from "./Row";
import Col from "./Col";

const kebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
export function registerAllCustomElements() {
  // map the custom element to the component and register it if it is not registered
  const array = [Button];
  for (let i = 0; i < array.length; i++) {
    const ce = array[i];
    const name = kebabCase(ce.name);
    if (!customElements.get(name)) {
      customElements.define(name, ce.customElement);
    }
  }
}

export function registerCustomElement(...rest: any[]) {
  const array = rest;
  for (let i = 0; i < array.length; i++) {
    const ce = array[i];
    const name = kebabCase(ce.name);
    if (!customElements.get(name)) {
      customElements.define(name, ce.customElement);
    }
  }
}

export { Button, Row, Col };
