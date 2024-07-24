<script setup lang="ts">
import { computed } from "vue";
import type { IconProps } from "./types.ts";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash-es";

defineOptions({
  name: 'EyIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => ({
  color: props.color ?? void 0
}))
</script>

<template>
  <i
    class="ey-icon"
    :class="{[`ey-icon-${props.type}`]: type}"
    :style="customStyle"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>
<style scoped>
.ey-icon {
  --ey-icon-color: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--ey-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .ey-icon--$(val) {
    --ey-icon-color: var(--ey-color-$(val));
  }
}
</style>
