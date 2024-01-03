import { Meta, StoryObj } from "@storybook/react";
import DatePickerComponent from ".";
import { DatePickerProps } from "./DatePickerProps";

export default {
  title: "components/DatePickerComponent",
  component: DatePickerComponent,
  args: {
    label: "Invoice Date",
  },
} as Meta<DatePickerProps>;

export const Primary: StoryObj = {};
