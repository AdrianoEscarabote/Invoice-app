interface SenderAddressTypes {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface clientAddressTypes {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface ItemTypes {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface InvoiceTypes {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: "1" | "7" | "14" | "30";
  clientName: string;
  clientEmail: string;
  status: "Pending" | "Paid" | "Draft";
  senderAddress: SenderAddressTypes;
  clientAddress: clientAddressTypes;
  items: ItemTypes[];
  total: number;
}

export { InvoiceTypes, ItemTypes, SenderAddressTypes, clientAddressTypes };
