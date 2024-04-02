"use client";

import { useRef } from "react";
import DeleteButton from "../DeleteButton";
import { DeletePromptProps } from "./DeletePrompt";
import CancelButton from "../CancelButton";
import useModalFocus from "@/hooks/useModalFocus";
import useDeleteInvoice from "@/hooks/useDeleteInvoice";
import { useDispatch } from "react-redux";
import { deleteInvoice } from "@/redux/invoice/reducer";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";

const DeletePrompt = ({ closePrompt, DeleteFn }: DeletePromptProps) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const selectedInvoice = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.selectedInvoice
  );
  const { handleDeleteInvoice } = useDeleteInvoice();

  useModalFocus(modalRef, closePrompt);

  const handleDeleteInvoiceClick = () => {
    handleDeleteInvoice();
    dispatch(deleteInvoice());

    if (DeleteFn) {
      DeleteFn();
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50 bg-[#1d1d1d93]"
      onClick={closePrompt}
    >
      <div
        role="dialog"
        aria-labelledby="prompt-title"
        aria-describedby="prompt-content"
        className="flex z-[200] flex-col bg-2 w-full max-w-[480px] rounded-lg p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="HeadingM mb-3 text-color2">Confirm Deletion</h2>
        <p className="Body draft-btn" style={{ background: "unset" }}>
          Are you sure you want to delete invoice #{selectedInvoice.id}? This
          action cannot be undone.
        </p>

        <div className="flex gap-2 w-full justify-end mt-3">
          <CancelButton CancelFn={closePrompt} id="first_element" />
          <DeleteButton onClick={handleDeleteInvoiceClick} />
        </div>
      </div>
    </div>
  );
};

export default DeletePrompt;
