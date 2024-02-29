import { dataTypes } from "../redux-types";

interface initialStateType {
  invoices: dataTypes[];
  selectedInvoice: dataTypes;
}

export const initialState: initialStateType = {
  invoices: [],
  selectedInvoice: {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "1",
    clientName: "",
    clientEmail: "",
    status: "Draft",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      city: "",
      street: "",
      postCode: "",
      country: "",
    },
    items: [],
    total: 0,
  },
};
