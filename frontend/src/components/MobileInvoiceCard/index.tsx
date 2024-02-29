import { MobileInvoiceCardProps } from "./MobileInvoiceCardProps";
import InvoiceStatus from "../InvoiceStatus";
import { format } from "date-fns/format";

const MobileInvoiceCard = ({
  clientName,
  id,
  navigateToViewInvoice,
  paymentDue,
  status,
  total,
}: MobileInvoiceCardProps) => {
  return (
    <button
      onClick={navigateToViewInvoice}
      data-testid="button"
      className="w-full shadow rounded-lg bg-2 flex items-center justify-between flex-col px-6 py-5 gap-6"
    >
      <div className="flex items-center justify-between w-full">
        <p className="flex items-center text-color2 HeadingSVariant">
          <span className="HeadingSVariant text-color3">#</span>

          {id}
        </p>

        <p className="BodyVariant text-color3 max-w-[125px] overflow-hidden whitespace-nowrap overflow-ellipsis">
          {clientName}
        </p>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-start gap-5 flex-col">
          <p className="BodyVariant text-color3 max-w-[100px] overflow-hidden whitespace-nowrap overflow-ellipsis">
            {paymentDue
              ? `Due ${format(new Date(paymentDue), "dd MMM yyyy")}`
              : null}
          </p>
          <p className="HeadingS text-color2 flex ">
            £{" "}
            {total.toLocaleString("en", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div>
          <InvoiceStatus statusProp={status} />
        </div>
      </div>
    </button>
  );
};

export default MobileInvoiceCard;
