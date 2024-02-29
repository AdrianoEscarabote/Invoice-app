export interface DesktopInvoiceCardProps {
  status: "Pending" | "Paid" | "Draft";
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  navigateToViewInvoice: () => void;
}
