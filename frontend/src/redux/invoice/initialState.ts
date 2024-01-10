import { InvoiceTypes } from "./InvoiceDataTypes";

export const initialState: InvoiceTypes = {
  id: "",
  clientName: "",
  createdAt: "",
  description: "",
  paymentDue: "",
  paymentTerms: "",
  status: "",
  clientAdress: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },
  items: [
    {
      name: "",
      price: 0,
      quantity: 0,
      total: 0,
    },
  ],
  senderAdress: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },
  total: 0,
};
