import { Meta, StoryObj } from "@storybook/react";
import EditInvoice from ".";
import { EditInvoiceProps } from "./EditInvoiceProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/EditInvoice",
  component: EditInvoice,
  args: {
    closeEditInvoice: () => {},
  },
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta<EditInvoiceProps>;

export const Primary: StoryObj = {};
