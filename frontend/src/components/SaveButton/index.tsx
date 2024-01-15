import { SaveButtonProps } from "./SaveButtonProps";

const SaveButton = ({ SaveFn, label }: SaveButtonProps) => {
  return (
    <button
      onClick={SaveFn}
      className="HeadingSVariant bg-dark_purple text-white rounded-3xl w-full max-w-[138px] h-12 hover:bg-light_purple"
    >
      {label ? label : "Save Changes"}
    </button>
  );
};

export default SaveButton;
