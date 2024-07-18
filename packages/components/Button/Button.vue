<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
/**
 * 组件目录结构
 * Button.vue  组件
 * Button.test.tsc  测试文件
 * type.ts 类型声明
 * style.css 样式文件
 * constants.ts 常量（如果有)
 */
defineOptions({
  name: "EyButton",
  // props: {
  //   // disabled: Boolean,
  // },
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  type: "primary",
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
});
console.log("props: ", props);
</script>
<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="ey-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`ey-button--${type}`]: type,
      [`ey-button--${size}`]: size,
      'is-plain': plain,
      'is-circle': circle,
      'is-round': round,
      'is-disabled': disabled || loading ? true : void 0,
      'is-loading': loading,
    }"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <slot></slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>
