import { Meta, StoryObj } from "@storybook/react";
import CreateInvoice from ".";
import { CreateInvoiceProps } from "./CreateInvoiceProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/CreateInvoice",
  component: CreateInvoice,
  args: {
    closeCreateInvoice: () => {},
  },
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta<CreateInvoiceProps>;

export const Primary: StoryObj = {};
