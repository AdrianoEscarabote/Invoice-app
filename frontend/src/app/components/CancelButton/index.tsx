import { CancelButtonProps } from "./CancelButton";

const CancelButton = ({ CancelFn }: CancelButtonProps) => {
  return (
    <button
      onClick={CancelFn}
      className="rounded-3xl w-full max-w-[91px] h-12 btn-edit-color HeadingSVariant text-color3"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
