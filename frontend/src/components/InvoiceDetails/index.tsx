import { InvoiceDetailsProps } from "./InvoiceDetailsProps";
import { format } from "date-fns";

const InvoiceDetails = (data: InvoiceDetailsProps) => {
  return (
    <section className="max-w-[730px] bg-2 p-12 rounded-lg flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-color2 HeadingS flex gap-2">
            <span className="text-color3">#</span>
            {data.id}
          </p>
          <p className="BodyVariant text-color3">{data.description}</p>
        </div>
        <p className="flex flex-col gap-2 BodyVariant text-color3 text-end">
          <span>{data.senderAddress.street}</span>
          <span>{data.senderAddress.city}</span>
          <span>{data.senderAddress.postCode}</span>
          <span>{data.senderAddress.country}</span>
        </p>
      </div>

      <div className="flex items-start gap-[120px] mt-5">
        <div className="flex flex-col gap-7">
          <p className="BodyVariant flex flex-col gap-2 text-color3">
            Invoice Date
            <span className="text-color2 HeadingS">
              {format(new Date(data.createdAt), "dd MMM yyyy")}
            </span>
          </p>

          <p className="BodyVariant flex flex-col gap-2 text-color3">
            Payment Due
            <span className="text-color2 HeadingS">
              {format(new Date(data.paymentDue), "dd MMM yyyy")}
            </span>
          </p>
        </div>

        <div>
          <p className="flex flex-col gap-3 BodyVariant text-color3">
            Bill To
            <span className="mb-2 text-color2 HeadingS">{data.clientName}</span>
            <span className="">{data.clientAddress.street}</span>
            <span className="">{data.clientAddress.city}</span>
            <span className="">{data.clientAddress.postCode}</span>
            <span className="">{data.clientAddress.country}</span>
          </p>
        </div>

        <div>
          <p className="flex flex-col gap-2 BodyVariant text-color3">
            Sent to
            <span className="HeadingS text-color2">{data.clientEmail}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-8 bg-3 rounded-t-lg mt-11">
        <div className="BodyVariant text-color3 grid grid-cols-2">
          <p>Item Name</p>
          <div className="w-full flex justify-between">
            <p>QTY.</p>
            <p>Price</p>
            <p>Total</p>
          </div>
        </div>
        {data.items.map((item) => (
          <div className="HeadingSVariant text-color2 grid grid-cols-2">
            <p>{item.name}</p>
            <div className="w-full flex justify-between items-center text-center place-content-center">
              <p className="min-w-[26px] text-color3">{item.quantity}</p>
              <p className="text-color3">£ {item.price}</p>
              <p>£ {item.total}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between h-20 p-8 text-white bg-4 rounded-b-lg">
        <p className="Body">Amount Due</p>
        <p className="HeadingM">£ {data.total}</p>
      </div>
    </section>
  );
};

export default InvoiceDetails;
