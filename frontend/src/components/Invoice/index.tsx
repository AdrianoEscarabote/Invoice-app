import { useEffect, useState } from "react";
import InvoiceButton from "../InvoiceButton";
import InvoiceCard from "../InvoiceCard";
import StatusButton from "../StatusButton";
import ViewInvoice from "../ViewInvoice";
import CreateInvoice from "../CreateInvoice";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { useDispatch } from "react-redux";
import { selectInvoice } from "@/redux/invoice/reducer";
import { dataTypes } from "@/redux/redux-types";
import {
  selectInvoicesCount,
  selectInvoicesCountFilteredFactory,
} from "@/redux/invoice/invoice.selector";
import NothingHereComponent from "../NothingHereComponent";
import useInvoices from "@/hooks/useInvoices";
import useWindowSize from "@/hooks/useWindowSize";
import style from "./style.module.css";
import useUserAuthenticated from "@/hooks/useUserAuthenticated";

export type statusType = "Draft" | "Pending" | "Paid";

const Invoice = () => {
  useUserAuthenticated("/login")
  useInvoices();
  const dispatch = useDispatch();
  const { invoices } = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice
  );
  const [status, setStatus] = useState<statusType>();
  const [showViewInvoice, setShowOpenViewInvoice] = useState<boolean>(false);
  const [showCreateInvoice, setShowCreateInvoice] = useState<boolean>(false);

  const invoicesCount = useSelector(selectInvoicesCount);
  const invoicesCountFiltered = useSelector(
    selectInvoicesCountFilteredFactory(status!)
  );

  const [filteredInvoices, setFilteredInvoices] = useState<dataTypes[]>([]);

  useEffect(() => {
    if (status) {
      setFilteredInvoices(
        invoices.filter((invoice) => invoice.status === status)
      );
    }
  }, [status]);

  const handleNavigate = (index: number) => {
    dispatch(selectInvoice({ index }));
    setShowOpenViewInvoice(!showViewInvoice);
  };

  const { screenSize } = useWindowSize();

  useEffect(() => {
    if (showCreateInvoice) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  }, [showCreateInvoice]);

  return (
    <>
      {!showViewInvoice ? (
        <>
          <section
            className={`${style.container} relative pt-16 px-6 flex flex-col items-center justify-start min-h-screen max-h-screen w-full`}
          >
            <div className="max-w-[730px] w-full flex items-center justify-between">
              <div>
                <h1
                  className={`${
                    screenSize === "desktop" ? "HeadingL" : "HeadingM"
                  } text-color2`}
                >
                  Invoices
                </h1>
                {screenSize === "desktop" ? (
                  <p className="BodyVariant mt-[6px] text-color">
                    {filteredInvoices.length === 0 && status
                      ? "There are 0 total invoices"
                      : `There ${
                          invoicesCountFiltered === 0
                            ? "are " + invoicesCount
                            : "are " + invoicesCountFiltered
                        } total invoices`}
                  </p>
                ) : (
                  <p className="BodyVariant mt-[6px] text-color">
                    {filteredInvoices.length === 0 && status
                      ? "0 invoices"
                      : `${
                          invoicesCountFiltered === 0
                            ? invoicesCount
                            : invoicesCountFiltered
                        } invoices`}
                  </p>
                )}
              </div>

              <div
                className={`flex items-center ${
                  screenSize === "desktop" ? "gap-10" : "gap-4"
                }`}
              >
                <StatusButton statusProp={status} setStatus={setStatus} />
                <InvoiceButton
                  disabled={false}
                  onClick={() => setShowCreateInvoice(!showCreateInvoice)}
                />
              </div>
            </div>

            <div
              className={`${style.container_cards} max-w-[740px] flex gap-4 flex-col w-full mt-16 h-full overflow-y-scroll p-1 custom_scrollbar`}
            >
              {status &&
                filteredInvoices.map((invoice, index) => (
                  <InvoiceCard
                    key={index}
                    navigateToViewInvoice={() => handleNavigate(index)}
                    paymentDue={invoice.paymentDue}
                    total={invoice.total}
                    clientName={invoice.clientName}
                    status={invoice.status}
                    id={invoice.id}
                  />
                ))}
              {!status &&
                invoices.map((invoice, index) => (
                  <InvoiceCard
                    key={index}
                    navigateToViewInvoice={() => handleNavigate(index)}
                    paymentDue={invoice.paymentDue}
                    total={invoice.total}
                    clientName={invoice.clientName}
                    status={invoice.status}
                    id={invoice.id}
                  />
                ))}
              {filteredInvoices.length === 0 && status ? (
                <div className="flex flex-col w-full items-center justify-start h-full">
                  <NothingHereComponent />
                </div>
              ) : null}
              {invoices.length === 0 && (
                <div className="flex flex-col w-full items-center justify-start h-full">
                  <NothingHereComponent />
                </div>
              )}
            </div>
            {showCreateInvoice && (
              <CreateInvoice
                closeCreateInvoice={() =>
                  setShowCreateInvoice(!showCreateInvoice)
                }
              />
            )}
          </section>
        </>
      ) : (
        <ViewInvoice
          navigateToInvoice={() => setShowOpenViewInvoice(!showViewInvoice)}
        />
      )}
    </>
  );
};

export default Invoice;
