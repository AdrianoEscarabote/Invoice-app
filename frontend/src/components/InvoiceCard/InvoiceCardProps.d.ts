export interface InvoiceCardProps {
  status: "Pending" | "Paid" | "Draft";
  id: string;
  paymentDue: string;
  clientName: string;
  total: string;
}
