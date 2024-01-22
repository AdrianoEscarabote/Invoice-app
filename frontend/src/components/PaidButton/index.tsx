import { twMerge } from "tailwind-merge";
import { PaidButtonProps } from "./PaidButtonProps";

const PaidButton: React.FC<PaidButtonProps> = ({ className, ...props }) => {
  const classNameButton = twMerge(
    className,
    "HeadingSVariant bg-dark_purple text-white rounded-3xl w-full max-w-[131px] h-12 hover:bg-light_purple"
  );

  return (
    <button className={classNameButton} {...props}>
      Mark as Paid
    </button>
  );
};

export default PaidButton;
