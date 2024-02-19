import { Meta, StoryObj } from "@storybook/react";
import DesktopInvoiceCard from ".";
import { DesktopInvoiceCardProps } from "./DesktopInvoiceCardProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/DesktopInvoiceCard",
  component: DesktopInvoiceCard,
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
  args: {
    clientName: "Adriano",
    id: "4TR9F1",
    navigateToViewInvoice: () => {},
    paymentDue: "2024-01-01",
    status: "Pending",
    total: 20000,
  },
} as Meta<DesktopInvoiceCardProps>;

export const Primary: StoryObj = {};
