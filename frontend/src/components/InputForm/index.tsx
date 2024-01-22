import { twMerge } from "tailwind-merge";
import { InputFormProps } from "./InputForm";
import { LegacyRef, forwardRef } from "react";

const Input = (
  { className, error, labelText, errorMessage, id, ...props }: InputFormProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const inputClassName = twMerge(
    className,
    "outline-none w-full max-w-[240px] h-12 rounded-[4px] pl-5 text-color2 border border-form-input focus:border-light_purple bg-2"
  );

  return (
    <>
      <label htmlFor={id} className="w-full flex items-start flex-col gap-2">
        <span className="text-color3 BodyVariant">{labelText}</span>
        <input ref={ref} className={inputClassName} {...props} id={id} />
        {error && errorMessage && (
          <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
        )}
      </label>
    </>
  );
};

export default forwardRef(Input);
