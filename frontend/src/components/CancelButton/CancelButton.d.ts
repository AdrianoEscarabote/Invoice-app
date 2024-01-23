import { ComponentPropsWithoutRef } from "react";

export interface CancelButtonProps extends ComponentPropsWithoutRef<"button"> {
  CancelFn?: () => void;
}

export { CancelButtonProps };
