<template>
  <div :class="nameSpace" ref="ele">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, onMounted } from "vue";
import { Grow, Shrink, Basis } from "../types";
import { createNamespace } from "../../utils";
const [nameSpace, name] = createNamespace("col");
export default defineComponent({
  name,
  props: {
    color: {
      type: String,
    },

    grow: {
      type: String as PropType<Grow>,
      default: "1",
    },
    shrink: {
      type: String as PropType<Shrink>,
      default: "0",
    },
    basis: {
      type: String as PropType<Basis>,
      default: "0%",
    },
    flex: {
      default: 0,
    },
  },
  setup(props) {
    const ele: any = ref(null);
    const { grow, shrink, basis, flex } = props;
    const style: any = {
      flex,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
    };
    onMounted(() => {
      if (ele?.value?.getRootNode()) {
        for (let key in style) {
          ele.value.getRootNode().host.style[key] = style[key];
        }
      }
    });
    return {
      nameSpace,
      style,
      ele,
    };
  },
});
</script>

<style lang="less">
.xizi-col {
}
</style>
