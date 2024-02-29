import { InvoiceCardProps } from "./InvoiceCardProps";
import useWindowSize from "@/hooks/useWindowSize";
import DesktopInvoiceCard from "../DesktopInvoiceCard";
import MobileInvoiceCard from "../MobileInvoiceCard";

const InvoiceCard = ({
  status,
  clientName,
  id,
  paymentDue,
  total,
  navigateToViewInvoice,
}: InvoiceCardProps) => {
  const { screenSize } = useWindowSize();
  return (
    <>
      {screenSize === "mobile" ? (
        <MobileInvoiceCard
          status={status}
          clientName={clientName}
          id={id}
          paymentDue={paymentDue}
          total={total}
          navigateToViewInvoice={navigateToViewInvoice}
        />
      ) : (
        <DesktopInvoiceCard
          status={status}
          clientName={clientName}
          id={id}
          paymentDue={paymentDue}
          total={total}
          navigateToViewInvoice={navigateToViewInvoice}
        />
      )}
    </>
  );
};

export default InvoiceCard;
