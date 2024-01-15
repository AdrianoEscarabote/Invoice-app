import { Meta, StoryObj } from "@storybook/react";
import EditInvoice from ".";
import { EditInvoiceProps } from "./EditInvoiceProps";
import { InvoiceDataMock } from "@/utils/mock";

export default {
  title: "components/EditInvoice",
  component: EditInvoice,
  args: InvoiceDataMock,
} as Meta<EditInvoiceProps>;

export const Primary: StoryObj = {};
