export interface InvoiceDetailsProps {
  data: Props;
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
  items: ItemTypes[];
  total: number;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
