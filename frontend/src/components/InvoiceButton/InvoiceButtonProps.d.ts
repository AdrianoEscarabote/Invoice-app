import { ComponentPropsWithoutRef } from "react";

export interface InvoiceButtonProps extends ComponentPropsWithoutRef<"button"> {
  onClick: () => void;
}
