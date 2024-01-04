import { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";
import { DropdownProps } from "./DropdownProps";

export default {
  title: "components/Dropdown",
  component: Dropdown,
  args: {
    day: "14",
  },
} as Meta<DropdownProps>;

export const Primary: StoryObj = {};

export const Secondary: StoryObj = {
  args: {
    day: "30",
  },
};
