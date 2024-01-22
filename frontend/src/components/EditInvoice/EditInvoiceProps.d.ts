export interface EditInvoiceProps {
  data: Props;
  closeEditInvoice: () => void;
}

interface Props {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
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
  items: Item[];
  total: number;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
