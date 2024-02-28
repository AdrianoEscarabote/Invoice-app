import { Meta, StoryObj } from "@storybook/react";
import ViewInvoice from ".";
import { ViewInvoiceProps } from "./ViewInvoiceProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/ViewInvoice",
  component: ViewInvoice,
  args: {
    navigateToInvoice: () => {},
  },
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta<ViewInvoiceProps>;

export const Primary: StoryObj = {};
