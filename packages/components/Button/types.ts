import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "default" | "small";
export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  loadingIcon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  autoFocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
  // content?: string;
}

export interface ButtonEmits {
  (event: "click", e: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}
