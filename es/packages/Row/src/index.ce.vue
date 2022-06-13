<template>
  <div :class="nameSpace" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { RowAlign, RowJustify, RowDirection, RowWrap } from "../types";
import { createNamespace } from "../../utils";
const [nameSpace, name] = createNamespace("row");
export default defineComponent({
  name,
  props: {
    color: {
      type: String,
    },

    align: {
      type: String as PropType<RowAlign>,
      default: "start",
    },
    justify: {
      type: String as PropType<RowJustify>,
      default: "start",
    },
    direction: {
      type: String as PropType<RowDirection>,
      default: "row",
    },
    wrap: {
      type: String as PropType<RowWrap>,
      default: "nowrap",
    },
  },
  setup(props) {
      console.info(name,nameSpace)
    const style: any = computed(() => {
      const { align, justify, direction, wrap } = props;
      const styleStr = `flex-direction: ${direction};align-items: ${align};justify-content: ${justify};flex-wrap: ${wrap};`;
      console.info(styleStr);
      return styleStr;
    });
    return {
      nameSpace,
      style,
    };
  },
});
</script>

<style lang="less">
.xizi-row {
  width: 100%;
  display: flex;
}
</style>
