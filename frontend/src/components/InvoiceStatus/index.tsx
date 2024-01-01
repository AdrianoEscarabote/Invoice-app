import { InvoiceStatusProps } from "./InvoiceStatusProps";
import style from "./stlye.module.css";

const InvoiceStatus = ({ status }: InvoiceStatusProps) => {
  return (
    <>
      {status === "Paid" && (
        <p className="text-[#33D69F] HeadingSVariant relative h-10 w-full min-w-[104px] rounded-lg bg-[#33D69F] bg-opacity-5 gap-2 flex items-center justify-center">
          <span className={`bg-[#33d69f] ${style.circle}`}></span>
          Paid
        </p>
      )}
      {status === "Pending" && (
        <p
          data-testid="pendingButton"
          className="text-[#FF8F00] HeadingSVariant relative h-10 w-full min-w-[104px] rounded-lg bg-[#FF8F00] bg-opacity-5 flex items-center justify-center gap-2"
        >
          <span className={`bg-[#FF8F00] ${style.circle}`}></span>
          Pending
        </p>
      )}
      {status === "Draft" && (
        <p className="status-draft-color HeadingSVariant relative h-10 w-full min-w-[104px] rounded-lg bg-[#DFE3FA] bg-opacity-5 flex items-center justify-center gap-2">
          <span className={`bg-[#373B53] ${style.circle}`}></span>
          Draft
        </p>
      )}
    </>
  );
};

export default InvoiceStatus;
