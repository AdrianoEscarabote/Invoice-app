import { Meta, StoryObj } from "@storybook/react";
import ItemList from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/ItemList",
  component: ItemList,
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
