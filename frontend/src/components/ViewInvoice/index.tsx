import Image from "next/image";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import PaidButton from "../PaidButton";
import InvoiceDetails from "../InvoiceDetails";
import StatusButton from "../StatusButton";
import InvoiceStatus from "../InvoiceStatus";

const ViewInvoice = () => {
  return (
    <section className="min-h-screen">
      <button className="HeadingSVariant text-color2 flex items-center gap-6 mb-8">
        <Image
          alt="icon arrow"
          width={8}
          height={4}
          src={"/assets/icon-arrow-left.svg"}
        />
        Go Back
      </button>

      <div className="rounded-lg bg-2 shadow px-8 py-6 flex items-center justify-between">
        <div className="flex gap-5 items-center max-w-[160px] w-full">
          <p className="BodyVariant text-color3">Status</p>
          <InvoiceStatus status="Pending" />
        </div>

        <div className="flex gap-2 items-center w-full max-w-[310px]">
          <EditButton />

          <DeleteButton />

          <PaidButton />
        </div>
      </div>
    </section>
  );
};

export default ViewInvoice;
