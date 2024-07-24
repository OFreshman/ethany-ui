<script setup lang="ts">
import { computed, ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import EyIcon from "../Icon/Icon.vue";
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
  throttleDuration: 700,
});

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px'
}))

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false });

defineExpose<ButtonInstance>({
  ref: _ref,
});
console.log("props: ", props);
</script>
<template>
  <component
    :is="props.tag"
    :autoFocus="autoFocus"
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
    <template v-if="loading">
      <slot name="loading">
        <ey-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          szie="1x"
          spin
        />
      </slot>
    </template>
    <ey-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle"></ey-icon>
    <slot></slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>
