import { Meta, StoryObj } from "@storybook/react";
import NewItemButton from "./";
import { NewItemButtonProps } from "./NewItemButtonProps";

export default {
  title: "components/NewItemButton",
  component: NewItemButton,
  tags: ["autodocs"],
  args: {},
} as Meta<NewItemButtonProps>;

export const Primary: StoryObj = {};
