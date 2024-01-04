import { PaidButtonProps } from "./PaidButtonProps";

const PaidButton = ({ onClick }: PaidButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="HeadingSVariant bg-dark_purple text-white rounded-3xl w-full max-w-[131px] h-12 hover:bg-light_purple"
    >
      Mark as Paid
    </button>
  );
};

export default PaidButton;
