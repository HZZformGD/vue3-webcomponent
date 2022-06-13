<template>
  <button
    :class="`${nameSpace} ${block ? 'block' : 'inline'} ${
      square ? 'square' : ''
    } ${size} ${disabled ? 'disabled' : ''}`"
    :style="{ background: color }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ButtonSize } from "../types";
import { createNamespace } from "../../utils";
const [nameSpace, name] = createNamespace("button");
export default defineComponent({
  name,
  props: {
    color: {
      type: String,
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "normal",
    },
    square: {
      type: Boolean,
    },
    block: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const handleClick = (e: Event) => props.onClick?.(e);
    return {
      handleClick,
      nameSpace,
    };
  },
});
</script>

<style lang="less">
.xizi-button {
  display: inline-flex;
  padding: 10px;
  background: var(--primary-color-a);
  color: #fff;
  outline: none;
  border: none;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  &.block {
    display: flex;
    width: 100%;
  }
  &.disabled {
    background-color: var(--layer-black-color-g);
  }
  cursor: pointer;
  &.small {
    font-size: var(--button-font-size-small);
    border-radius: var(--button-radius-small);
    height: var(--button-height-small);
  }
  &.normal {
    font-size: var(--button-font-size-normal);
    border-radius: var(--button-radius-normal);
    height: var(--button-height-normal);
  }
  &.large {
    font-size: var(--button-font-size-large);
    border-radius: var(--button-radius-large);
    height: var(--button-height-large);
  }
  &:active {
    opacity: 0.9;
  }
  &.square {
    border-radius: var(--van-button-round-border-radius) !important;
  }
}
</style>
