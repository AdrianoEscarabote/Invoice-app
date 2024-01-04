import Image from "next/image";
import InvoiceStatus from "../InvoiceStatus";
import { InvoiceCardProps } from "./InvoiceCardProps";
import { format } from "date-fns/format";
import style from "./stlye.module.css";

const InvoiceCard = ({
  status,
  clientName,
  id,
  paymentDue,
  total,
  navigateToViewInvoice,
}: InvoiceCardProps) => {
  return (
    <button
      onClick={navigateToViewInvoice}
      className={`${style.card} shadow rounded-lg bg-2 flex items-center justify-between w-full`}
    >
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-11">
          <p className="flex items-center text-color2 HeadingSVariant">
            <span className="HeadingSVariant text-color3">#</span>

            {id}
          </p>

          <p className="BodyVariant text-color3">
            {format(new Date(paymentDue), "dd MMM yyyy")}
          </p>
        </div>

        <p className="BodyVariant text-color3">{clientName}</p>
      </div>

      <div className="flex gap-5 items-center">
        <p className="HeadingS text-color2 flex ">£ {total}</p>

        <div className="flex items-center gap-5">
          <InvoiceStatus status={status} />
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

export default InvoiceCard;
