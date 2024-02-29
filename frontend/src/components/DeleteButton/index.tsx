import { twMerge } from "tailwind-merge";
import { DeleteButtonProps } from "./DeleteButtonProps";

const DeleteButton = ({ onClick, className, ...props }: DeleteButtonProps) => {
  const classNameButton = twMerge(
    className,
    "HeadingSVariant w-full max-w-[89px] h-12 rounded-3xl text-white bg-red hover:bg-light_red"
  );

  return (
    <button onClick={onClick} className={classNameButton} {...props}>
      Delete
    </button>
  );
};

export default DeleteButton;
