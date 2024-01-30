import { DraftSlice } from "../redux-types";

export const initialState: DraftSlice = {
  hasSavedData: false,
  data: {
    id: "",
    clientName: "",
    clientEmail: "",
    createdAt: "",
    description: "",
    paymentDue: "",
    paymentTerms: "",
    status: "Draft",
    clientAddress: {
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
    senderAddress: {
      city: "",
      country: "",
      postCode: "",
      street: "",
    },
    total: 0,
  },
};
