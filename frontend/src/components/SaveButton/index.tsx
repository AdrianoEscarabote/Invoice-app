import { SaveButtonProps } from "./SaveButtonProps";

const SaveButton = ({ SaveFn }: SaveButtonProps) => {
  return (
    <button
      onClick={SaveFn}
      className="HeadingSVariant bg-dark_purple text-white rounded-3xl w-full max-w-[138px] h-12 hover:bg-light_purple"
    >
      Save Changes
    </button>
  );
};

export default SaveButton;
