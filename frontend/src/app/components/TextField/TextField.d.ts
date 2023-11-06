import { ComponentPropsWithoutRef } from "react";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  labelText?: string;
  error?: boolean;
  errorMessage?: string;
}

export { TextFieldProps };
