import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
// import { defineComponent } from 'vue';
import Button from "./Button.vue"; // 根据实际路径调整

// 定义一个用于测试的组件
// const TestButton = defineComponent({
//   components: {
//     Button,
//   },
//   template: `
//     <Button
//       :size="size"
//       :type="type"
//       :plain="plain"
//       :round="round"
//       :circle="circle"
//       :loading="loading"
//       :disabled="disabled"
//       :icon="icon"
//       :autofocus="autofocus"
//       :native-type="nativeType"
//       :use-throttle="useThrottle"
//       :throttle-duration="throttleDuration"
//       @click="onClick"
//     >
//       <template v-if="$slots.default" #default>{{ content }}</template>
//       <template v-if="$slots.loading" #loading>{{ loadingContent }}</template>
//     </Button>
//   `,
//   props: {
//     size: String,
//     type: String,
//     plain: Boolean,
//     round: Boolean,
//     circle: Boolean,
//     loading: Boolean,
//     disabled: Boolean,
//     icon: String,
//     autofocus: Boolean,
//     nativeType: String,
//     useThrottle: Boolean,
//     throttleDuration: Number,
//     content: String,
//     loadingContent: String,
//   },
//   setup(props, { emit }) {
//     const onClick = vi.fn();
//     return { ...props, onClick };
//   },
// });

describe("Button Component", () => {
  it("should render correctly with default props", () => {
    const wrapper = mount(Button, {
      props: {
        content: "Click Me",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render correctly with different sizes", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: {
          size,
          content: `Button with size ${size}`,
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it("should render correctly with different types", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: {
          type,
          content: `Button with type ${type}`,
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it("should render icon when icon prop is provided", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "check",
        content: "Icon Button",
      },
    });
    expect(wrapper.find(".icon").exists()).toBe(true);
  });

  // it("should be disabled when disabled prop is true", () => {
  //   const wrapper = mount(Button, {
  //     props: {
  //       disabled: true,
  //       content: "Disabled Button",
  //     },
  //   });
  //   expect(wrapper.element).toBeDisabled();
  // });

  it("should be disabled when the disabled prop is true", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.element.disabled).toBe(true);
  });

  it("should be in loading state when loading prop is true", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
        content: "Loading Button",
      },
    });
    expect(wrapper.find(".loading").exists()).toBe(true);
  });

  // it('should emit click event on button click', async () => {
  //   const wrapper = mount(Button, {
  //     props: {
  //       content: 'Click Me',
  //     },
  //   });
  //   await wrapper.trigger('click');
  //   expect(wrapper.vm.onClick).toHaveBeenCalled();
  // });

  // it('should not emit click event when disabled', async () => {
  //   const wrapper = mount(Button, {
  //     props: {
  //       disabled: true,
  //       content: 'Do Not Click',
  //     },
  //   });
  //   await wrapper.trigger('click');
  //   expect(wrapper.vm.onClick).not.toHaveBeenCalled();
  // });

  // Add more test cases as needed to cover other scenarios and functionalities.
});
