import Image from "next/image";
import { DesktopInvoiceCardProps } from "./DesktopInvoiceCardProps";
import InvoiceStatus from "../InvoiceStatus";
import { format } from "date-fns/format";
import style from "./stlye.module.css";

const DesktopInvoiceCard = ({
  clientName,
  id,
  navigateToViewInvoice,
  paymentDue,
  status,
  total,
}: DesktopInvoiceCardProps) => {
  return (
    <button
      onClick={navigateToViewInvoice}
      data-testid="button"
      className={`${style.card} shadow rounded-lg bg-2 flex items-center justify-between w-full`}
    >
      <div className={`${style.wrapper_data} flex items-center gap-14`}>
        <div className={`${style.wrapper_id} flex items-center gap-11`}>
          <p className="flex items-center text-color2 HeadingSVariant">
            <span className="HeadingSVariant text-color3">#</span>

            {id}
          </p>

          <p className="BodyVariant text-color3 max-w-[100px] overflow-hidden whitespace-nowrap overflow-ellipsis">
            {paymentDue
              ? `Due ${format(new Date(paymentDue), "dd MMM yyyy")}`
              : null}
          </p>
        </div>

        <p className="BodyVariant text-color3 max-w-[125px] overflow-hidden whitespace-nowrap overflow-ellipsis">
          {clientName}
        </p>
      </div>

      <div className="flex gap-5 items-center">
        <p className="HeadingS text-color2 flex">
          £{" "}
          {total.toLocaleString("en", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </p>

        <div className="flex items-center gap-5">
          <InvoiceStatus statusProp={status} />
          <Image
            src={"/assets/icon-arrow-right.svg"}
            width={8}
            height={12}
            alt="icon arrow"
          />
        </div>
      </div>
    </button>
  );
};
export default DesktopInvoiceCard;
