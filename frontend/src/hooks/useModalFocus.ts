import { useEffect } from "react";

const useModalFocus = (modalRef, onClose) => {
  useEffect(() => {
    const firstElement = document.getElementById("first_element");

    firstElement?.focus();
  }, []);
  useEffect(() => {
    const handleTabKey = (e) => {
      const modalElement = modalRef.current;

      if (modalElement && e.key === "Tab") {
        const focusableElements = modalElement.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        if (focusableElements.length > 0) {
          const firstFocusableElement =
            focusableElements[0] as HTMLElement | null;
          const lastFocusableElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement | null;

          if (e.shiftKey && document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement?.focus();
          } else if (
            !e.shiftKey &&
            document.activeElement === lastFocusableElement
          ) {
            e.preventDefault();
            firstFocusableElement?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    const handleClosePrompt = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        if (onClose) onClose();
      }
    };

    window.addEventListener("keydown", handleClosePrompt);

    return () => {
      window.removeEventListener("keydown", handleClosePrompt);
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [onClose]);
};

export default useModalFocus;
