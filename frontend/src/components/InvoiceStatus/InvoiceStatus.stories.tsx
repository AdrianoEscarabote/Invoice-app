import { Meta, StoryObj } from "@storybook/react";
import InvoiceStatus from ".";
import { InvoiceStatusProps } from "./InvoiceStatusProps";

export default {
  title: "components/InvoiceStatus",
  component: InvoiceStatus,
  args: {
    status: "Paid",
  },
} as Meta<InvoiceStatusProps>;

export const Paid: StoryObj = {};

export const Pending: StoryObj = {
  args: {
    status: "Pending",
  },
};

export const Draft: StoryObj = {
  args: {
    status: "Draft",
  },
};
