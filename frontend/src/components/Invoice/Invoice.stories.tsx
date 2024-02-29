import { Meta, StoryObj } from "@storybook/react";
import Invoice from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/Invoice",
  component: Invoice,
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
