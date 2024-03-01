import { ItemTypes } from "@/redux/redux-types";

export interface CreateInvoiceProps {
  closeCreateInvoice: () => void;
}

interface CreateInvoiceData {
  clientName: string;
  clientEmail: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    city: string;
    postCode: string;
    country: string;
    street: string;
  };
  description: string;
  createdAt: string;
  paymentTerms: 1 | 7 | 14 | 30;
  items: ItemTypes[];
  total: number;
}

interface;

export { CreateInvoiceData };
