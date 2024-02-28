import Image from "next/image";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import PaidButton from "../PaidButton";
import InvoiceDetails from "../InvoiceDetails";
import InvoiceStatus from "../InvoiceStatus";
import { ViewInvoiceProps } from "./ViewInvoiceProps";
import { useState } from "react";
import DeletePrompt from "../DeletePrompt";
import EditInvoice from "../EditInvoice";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { useDispatch } from "react-redux";
import { markAsPaid } from "@/redux/invoice/reducer";
import useMarkAsPaidInvoice from "@/hooks/useMarkAsPaidInvoice";
import style from "./style.module.css";
import useWindowSize from "@/hooks/useWindowSize";

const ViewInvoice = ({ navigateToInvoice }: ViewInvoiceProps) => {
  const dispatch = useDispatch();
  const { setCallMarkApi } = useMarkAsPaidInvoice();

  const [showDeletePrompt, setShowDeletePrompt] = useState<boolean>();
  const [showEditInvoice, setShowEditInvoice] = useState<boolean>();
  const { selectedInvoice } = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice
  );
  const handleMarkAsPaid = () => {
    setCallMarkApi(true);
    dispatch(markAsPaid());
  };

  const handleDeleteInvoice = () => {
    setShowDeletePrompt(!showDeletePrompt);
  };

  const { screenSize } = useWindowSize();

  return (
    <>
      {showDeletePrompt && (
        <DeletePrompt
          closePrompt={() => setShowDeletePrompt(!showDeletePrompt)}
          DeleteFn={() => {
            setShowDeletePrompt(!showDeletePrompt);
            navigateToInvoice();
          }}
        />
      )}
      <section
        className={`${style.container} relative flex flex-col items-center justify-center min-h-screen w-full p-4`}
      >
        {showEditInvoice && (
          <EditInvoice
            key={"edit-invoice"}
            closeEditInvoice={() => setShowEditInvoice(!showEditInvoice)}
          />
        )}
        <div className="max-w-[730px] w-full flex flex-col gap-6">
          <button
            onClick={navigateToInvoice}
            className="HeadingSVariant text-color2 flex items-center gap-6 py-2 max-w-[97px] hover:text-[#888EB0]"
          >
            <Image
              alt="icon arrow"
              width={8}
              height={4}
              src={"/assets/icon-arrow-left.svg"}
            />
            Go Back
          </button>

          <div className="rounded-lg bg-2 shadow px-8 py-6 flex items-center justify-between w-full">
            <div
              className={`${
                screenSize === "desktop" ? "max-w-[160px]" : "justify-between"
              } flex gap-5 items-center w-full`}
            >
              <p className="BodyVariant text-color3">Status</p>
              {}
              <div>
                <InvoiceStatus />
              </div>
            </div>

            {screenSize === "desktop" ? (
              <div className="flex gap-2 items-center w-full max-w-[310px]">
                <EditButton
                  onClick={() => setShowEditInvoice(!showEditInvoice)}
                />

                <DeleteButton onClick={handleDeleteInvoice} />

                <PaidButton onClick={handleMarkAsPaid} />
              </div>
            ) : null}
          </div>

          <InvoiceDetails data={selectedInvoice} />
        </div>
      </section>

      {screenSize === "mobile" ? (
        <div className="fixed bottom-0 flex gap-2 bg-2 h-[91px] items-center justify-center w-full ">
          <EditButton onClick={() => setShowEditInvoice(!showEditInvoice)} />

          <DeleteButton onClick={handleDeleteInvoice} />

          <PaidButton onClick={handleMarkAsPaid} />
        </div>
      ) : null}
    </>
  );
};

export default ViewInvoice;
