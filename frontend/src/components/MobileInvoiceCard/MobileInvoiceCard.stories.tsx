import { Meta, StoryObj } from "@storybook/react";
import { MobileInvoiceCardProps } from "./MobileInvoiceCardProps";
import MobileInvoiceCard from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/MobileInvoiceCard",
  component: MobileInvoiceCard,
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
  args: {
    status: "Pending",
    navigateToViewInvoice: () => {},
    paymentDue: "2021-02-20",
    total: 20000,
    clientName: "Adriano",
    id: "4G2H90",
  },
} as Meta<MobileInvoiceCardProps>;

export const Primary: StoryObj = {};
