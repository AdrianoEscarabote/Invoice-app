import { twMerge } from "tailwind-merge";
import { CancelButtonProps } from "./CancelButton";

const CancelButton = ({ CancelFn, className, ...props }: CancelButtonProps) => {
  const classNameButton = twMerge(
    className,
    "rounded-3xl w-full max-w-[91px] h-12 btn-edit-color HeadingSVariant text-color3"
  );

  return (
    <button onClick={CancelFn} className={classNameButton} {...props}>
      Cancel
    </button>
  );
};

export default CancelButton;
