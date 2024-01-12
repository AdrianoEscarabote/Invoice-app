import { Meta, StoryObj } from "@storybook/react";
import { ItemListProps } from "./ItemListProps";
import ItemList from ".";

export default {
  title: "components/ItemList",
  component: ItemList,
  args: {
    items: [
      {
        name: "Email Design",
        price: 200.0,
        qty: 2,
      },
    ],
  },
} as Meta<ItemListProps>;

export const Primary: StoryObj = {};
