import example from "../docs/demo.vue";
import { mount } from "@vue/test-utils";
test("test col example", () => {
  const wrapper = mount(example);
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.unmount();
});

