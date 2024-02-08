import { ItemTypes, dataTypes } from "./redux-types";

interface SelectedInvoiceTypes {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: "Paid" | "Pending" | "Draft";
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: ItemTypes[];
  total: number;
}

interface rootState {
  invoiceSlice: {
    selectedInvoice: SelectedInvoiceTypes;
    invoices: dataTypes[];
  };
  itemsSlice: ItemTypes[];
}

export { rootState };
