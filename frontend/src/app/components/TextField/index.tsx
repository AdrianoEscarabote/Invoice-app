import { twMerge } from "tailwind-merge";
import { TextFieldProps } from "./TextField";
import { LegacyRef, forwardRef } from "react";

const TextField = (
  { className, error, labelText, errorMessage, id, ...props }: TextFieldProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const TextFieldClassName = twMerge(
    className,
    "outline-none w-full max-w-[240px] h-12 rounded-[4px] pl-5 text-almost_black border border-input focus:border-light_purple bg-2 HeadingSVariant text-color2 caret-dark_purple"
  );

  return (
    <label htmlFor={id} className="w-full flex items-start flex-col gap-2">
      <span className="text-color BodyVariant">{labelText}</span>
      <input ref={ref} className={TextFieldClassName} {...props} />
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </label>
  );
};

export default forwardRef(TextField);
