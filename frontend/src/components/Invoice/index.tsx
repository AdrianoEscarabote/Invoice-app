import InvoiceButton from "../InvoiceButton";
import StatusButton from "../StatusButton";
import { InvoiceProps } from "./InvoiceProps";

const Invoice = ({ invoiceCount }: InvoiceProps) => {
  return (
    <section className="flex items-start justify-start min-h-screen w-full">
      <div className="pt-16 px-6 info w-full flex items-center justify-between">
        <div>
          <h1 className="HeadingL">Invoices</h1>
          <p className="BodyVariant mt-[6px]">
            There are {invoiceCount} total invoices
          </p>
        </div>

        <div className="flex items-center gap-10">
          <StatusButton />
          <InvoiceButton />
        </div>
      </div>
    </section>
  );
};

export default Invoice;
