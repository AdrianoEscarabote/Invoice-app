import { ComponentPropsWithoutRef } from "react";

export interface ButtonFormProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
  disabled: boolean;
  maxWidth?: string;
  showLoadingComponent: boolean;
}
