import { twMerge } from "tailwind-merge";
import { EditButtonProps } from "./EditButtonProps";

const EditButton: React.FC<EditButtonProps> = ({ className, ...props }) => {
  const classNameButton = twMerge(
    className,
    "HeadingSVariant text-color3 w-full max-w-[73px] rounded-3xl edi btn-edit-color h-12"
  );
  return (
    <button className={classNameButton} {...props}>
      Edit
    </button>
  );
};

export default EditButton;
