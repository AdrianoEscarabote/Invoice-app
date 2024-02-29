export interface InvoiceDetailsProps {
  data: Props;
}

interface Props {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: "1" | "7" | "14" | "30";
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

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
