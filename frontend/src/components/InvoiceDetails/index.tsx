import { InvoiceDetailsProps } from "./InvoiceDetailsProps";
import { format } from "date-fns/format";
import style from "./style.module.css";
import useWindowSize from "@/hooks/useWindowSize";

const InvoiceDetails = ({ data }: InvoiceDetailsProps) => {
  const { screenSize } = useWindowSize();
  return (
    <section
      className={`${style.container} max-w-[730px] w-full bg-2 p-12 rounded-lg flex flex-col`}
    >
      <div className={`${style.container_id} w-full flex justify-between`}>
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

      <div
        className={`${style.container_cols} flex-wrap flex w-full items-start gap-[120px] mt-5`}
      >
        <div className={`${style.col_1} flex flex-col gap-7`}>
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
            <span className="HeadingS text-color2 max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {data.clientEmail}
            </span>
          </p>
        </div>
      </div>

      <div
        className={`${style.container_items} flex flex-col gap-8 p-8 bg-3 rounded-t-lg mt-11`}
      >
        {screenSize === "desktop" ? (
          <>
            <div className="BodyVariant text-color3 grid grid-cols-2">
              <p>Item Name</p>
              <div className="w-full flex justify-between">
                <p>QTY.</p>
                <p>Price</p>
                <p>Total</p>
              </div>
            </div>
            {data.items &&
              data.items.map((item) => (
                <>
                  <div className="HeadingSVariant text-color2 grid grid-cols-2">
                    <p className="text-color3 overflow-hidden text-ellipsis whitespace-nowrap max-w-[230px]">
                      {item.name}
                    </p>
                    <div className="w-full flex justify-between items-center text-center place-content-center">
                      <p className="min-w-[26px] text-color3">
                        {item.quantity}
                      </p>
                      <p className="text-color3 overflow-hidden text-ellipsis whitespace-nowrap max-w-[90px]">
                        £{" "}
                        {item.price.toLocaleString("en", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </p>
                      <p className="text-color3 overflow-hidden text-ellipsis whitespace-nowrap max-w-[90px]">
                        £{" "}
                        {item.total.toLocaleString("en", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                </>
              ))}
          </>
        ) : null}
        {screenSize === "mobile"
          ? data.items &&
            data.items.map((item) => (
              <div className="HeadingSVariant flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p className="HeadingS text-color2">{item.name}</p>
                  <p className="text-color3">
                    {item.quantity} x
                    <span>
                      {" "}
                      £{" "}
                      {item.price.toLocaleString("en", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </p>
                </div>
                <p className="text-color2">
                  £{" "}
                  {item.total.toLocaleString("en", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            ))
          : null}
      </div>

      <div className="flex items-center justify-between h-20 p-8 text-white bg-4 rounded-b-lg">
        <p className="Body">Amount Due</p>
        <p className="HeadingM">
          £{" "}
          {data.total.toLocaleString("en", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </section>
  );
};

export default InvoiceDetails;
