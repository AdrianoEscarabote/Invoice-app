import Image from "next/image";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import PaidButton from "../PaidButton";
import InvoiceDetails from "../InvoiceDetails";
import InvoiceStatus from "../InvoiceStatus";

const ViewInvoice = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[730px] flex flex-col gap-6">
        <button className="HeadingSVariant text-color2 flex items-center gap-6 py-2 max-w-[97px]">
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

        <InvoiceDetails
          data={{
            id: "XM9141",
            createdAt: "2021-08-21",
            paymentDue: "2021-09-20",
            description: "Graphic Design",
            paymentTerms: 30,
            clientName: "Alex Grim",
            clientEmail: "alexgrim@mail.com",
            status: "pending",
            senderAddress: {
              street: "19 Union Terrace",
              city: "London",
              postCode: "E1 3EZ",
              country: "United Kingdom",
            },
            clientAddress: {
              street: "84 Church Way",
              city: "Bradford",
              postCode: "BD1 9PB",
              country: "United Kingdom",
            },
            items: [
              {
                name: "Banner Design",
                quantity: 1,
                price: 156.0,
                total: 156.0,
              },
              {
                name: "Email Design",
                quantity: 2,
                price: 200.0,
                total: 400.0,
              },
            ],
            total: 556.0,
          }}
        />
      </div>
    </section>
  );
};

export default ViewInvoice;
