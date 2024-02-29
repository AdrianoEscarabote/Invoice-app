import { ComponentPropsWithoutRef } from "react";

export interface NewItemButtonProps extends ComponentPropsWithoutRef<"button"> {
  disabled: boolean;
}
