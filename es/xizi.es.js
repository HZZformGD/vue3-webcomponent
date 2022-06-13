import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, defineCustomElement, computed, ref, onMounted } from "vue";
function createNamespace(name2) {
  const prefixedName = `xizi-${name2}`;
  const pascalName = prefixedName.split("-").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join("");
  return [prefixedName, pascalName];
}
var _style_0$2 = ".xizi-button{display:inline-flex;padding:10px;background:var(--primary-color-a);color:#fff;outline:none;border:none;border-radius:2px;align-items:center;justify-content:center;cursor:pointer}.xizi-button.block{display:flex;width:100%}.xizi-button.disabled{background-color:var(--layer-black-color-g)}.xizi-button.small{font-size:var(--button-font-size-small);border-radius:var(--button-radius-small);height:var(--button-height-small)}.xizi-button.normal{font-size:var(--button-font-size-normal);border-radius:var(--button-radius-normal);height:var(--button-height-normal)}.xizi-button.large{font-size:var(--button-font-size-large);border-radius:var(--button-radius-large);height:var(--button-height-large)}.xizi-button:active{opacity:.9}.xizi-button.square{border-radius:var(--van-button-round-border-radius)!important}\n";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const [nameSpace$2, name$2] = createNamespace("button");
const _sfc_main$2 = defineComponent({
  name: name$2,
  props: {
    color: {
      type: String
    },
    onClick: {
      type: Function
    },
    size: {
      type: String,
      default: "normal"
    },
    square: {
      type: Boolean
    },
    block: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const handleClick = (e) => {
      var _a;
      return (_a = props.onClick) == null ? void 0 : _a.call(props, e);
    };
    return {
      handleClick,
      nameSpace: nameSpace$2
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(`${_ctx.nameSpace} ${_ctx.block ? "block" : "inline"} ${_ctx.square ? "square" : ""} ${_ctx.size} ${_ctx.disabled ? "disabled" : ""}`),
    style: normalizeStyle({ background: _ctx.color })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var component$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
var Button = {
  name: component$2.name,
  customElement: defineCustomElement(component$2),
  component: component$2
};
var _style_0$1 = ".xizi-row{width:100%;display:flex}\n";
const [nameSpace$1, name$1] = createNamespace("row");
const _sfc_main$1 = defineComponent({
  name: name$1,
  props: {
    color: {
      type: String
    },
    align: {
      type: String,
      default: "start"
    },
    justify: {
      type: String,
      default: "start"
    },
    direction: {
      type: String,
      default: "row"
    },
    wrap: {
      type: String,
      default: "nowrap"
    }
  },
  setup(props) {
    console.info(name$1, nameSpace$1);
    const style = computed(() => {
      const { align, justify, direction, wrap } = props;
      const styleStr = `flex-direction: ${direction};align-items: ${align};justify-content: ${justify};flex-wrap: ${wrap};`;
      console.info(styleStr);
      return styleStr;
    });
    return {
      nameSpace: nameSpace$1,
      style
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.nameSpace),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var component$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
var index$1 = {
  name: component$1.name,
  customElement: defineCustomElement(component$1),
  component: component$1
};
var _style_0 = "";
const [nameSpace, name] = createNamespace("col");
const _sfc_main = defineComponent({
  name,
  props: {
    color: {
      type: String
    },
    grow: {
      type: String,
      default: "1"
    },
    shrink: {
      type: String,
      default: "0"
    },
    basis: {
      type: String,
      default: "0%"
    },
    flex: {
      default: 0
    }
  },
  setup(props) {
    const ele = ref(null);
    const { grow, shrink, basis, flex } = props;
    const style = {
      flex,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis
    };
    onMounted(() => {
      var _a;
      if ((_a = ele == null ? void 0 : ele.value) == null ? void 0 : _a.getRootNode()) {
        for (let key in style) {
          ele.value.getRootNode().host.style[key] = style[key];
        }
      }
    });
    return {
      nameSpace,
      style,
      ele
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.nameSpace),
    ref: "ele"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
var index = {
  name: component.name,
  customElement: defineCustomElement(component),
  component
};
const kebabCase = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function registerAllCustomElements() {
  const array = [Button];
  for (let i = 0; i < array.length; i++) {
    const ce = array[i];
    const name2 = kebabCase(ce.name);
    if (!customElements.get(name2)) {
      customElements.define(name2, ce.customElement);
    }
  }
}
function registerCustomElement(...rest) {
  const array = rest;
  for (let i = 0; i < array.length; i++) {
    const ce = array[i];
    const name2 = kebabCase(ce.name);
    if (!customElements.get(name2)) {
      customElements.define(name2, ce.customElement);
    }
  }
}
export { Button, index as Col, index$1 as Row, registerAllCustomElements, registerCustomElement };
