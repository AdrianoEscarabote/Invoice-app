"use client";

import { useEffect } from "react";
import DeleteButton from "../DeleteButton";
import { DeletePromptProps } from "./DeletePrompt";
import CancelButton from "../CancelButton";

const DeletePrompt = ({ invoice, closePrompt }: DeletePromptProps) => {
  useEffect(() => {
    const handleTabKey = (e) => {
      const modalElement = document.getElementById("modal-overlay");
      modalElement?.focus();
      const focusableElements = modalElement?.querySelectorAll("button");

      if (focusableElements && focusableElements.length > 0) {
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.key === "Tab" || e.keyCode === 9) {
          if (!e.shiftKey && document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          } else if (
            e.shiftKey &&
            document.activeElement === firstFocusableElement
          ) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    const handleClosePrompt = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        if (closePrompt) closePrompt();
      }
    };

    window.addEventListener("keydown", handleClosePrompt);

    return () => {
      window.removeEventListener("keydown", handleClosePrompt);
      document.removeEventListener("keydown", handleTabKey);
    };
  }, []);

  return (
    <div
      id="modal-overlay"
      tabIndex={-1}
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
          Are you sure you want to delete invoice {invoice}? This action cannot
          be undone.
        </p>

        <div className="flex gap-2 w-full justify-end mt-3">
          <CancelButton CancelFn={closePrompt} />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default DeletePrompt;
