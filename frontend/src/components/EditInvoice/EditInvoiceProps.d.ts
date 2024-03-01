export interface EditInvoiceProps {
  closeEditInvoice: () => void;
}

export interface FormTypes {
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: 1 | 7 | 14 | 30;
  clientName: string;
  clientEmail: string;
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
}
