import style from "./stlye.module.css";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { InvoiceStatusProps } from "./InvoiceStatusProps";

const InvoiceStatus = ({ statusProp }: InvoiceStatusProps) => {
  const status = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.selectedInvoice.status
  );
  const invoiceStatus = statusProp !== undefined ? statusProp : status;

  return (
    <>
      {invoiceStatus === "Paid" && (
        <p className="text-[#33D69F] HeadingSVariant relative h-10 w-full min-w-[104px] rounded-lg bg-[#33D69F] bg-opacity-5 gap-2 flex items-center justify-center">
          <span className={`bg-[#33d69f] ${style.circle}`}></span>
          Paid
        </p>
      )}
      {invoiceStatus === "Pending" && (
        <p
          data-testid="pendingButton"
          className="text-[#FF8F00] HeadingSVariant relative h-10 w-full min-w-[104px] rounded-lg bg-[#FF8F00] bg-opacity-5 flex items-center justify-center gap-2"
        >
          <span className={`bg-[#FF8F00] ${style.circle}`}></span>
          Pending
        </p>
      )}
      {invoiceStatus === "Draft" && (
        <p className="status-draft-color HeadingSVariant relative h-10 w-full min-w-[104px] rounded-lg bg-[#DFE3FA] bg-opacity-5 flex items-center justify-center gap-2">
          <span className={`bg-[#373B53] ${style.circle}`}></span>
          Draft
        </p>
      )}
    </>
  );
};

export default InvoiceStatus;
