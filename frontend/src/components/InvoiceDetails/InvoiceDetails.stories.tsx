import { Meta, StoryObj } from "@storybook/react";
import InvoiceDetails from ".";
import { InvoiceDetailsProps } from "./InvoiceDetailsProps";
import { InvoiceDataMock } from "@/utils/mock";

export default {
  title: "components/InvoiceDetails",
  component: InvoiceDetails,
  args: InvoiceDataMock,
} as Meta<InvoiceDetailsProps>;

export const Primary: StoryObj = {};
