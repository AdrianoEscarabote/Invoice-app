import { ComponentPropsWithoutRef } from "react";

interface InputFormProps extends ComponentPropsWithoutRef<"input"> {
  labelText: string;
  error?: boolean;
  errorMessage?: string;
}

export { InputFormProps };
