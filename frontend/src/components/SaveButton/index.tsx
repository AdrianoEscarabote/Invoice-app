import { twMerge } from "tailwind-merge";
import { SaveButtonProps } from "./SaveButtonProps";

const SaveButton: React.FC<SaveButtonProps> = ({
  onClick,
  label,
  className,
  ...props
}) => {
  const classNameButton = twMerge(
    className,
    "HeadingSVariant bg-dark_purple text-white rounded-3xl w-full max-w-[138px] h-12 hover:bg-light_purple"
  );
  return (
    <button onClick={onClick} className={classNameButton} {...props}>
      {label ? label : "Save Changes"}
    </button>
  );
};

export default SaveButton;
