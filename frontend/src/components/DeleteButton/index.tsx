import { DeleteButtonProps } from "./DeleteButtonProps";

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="HeadingSVariant w-full max-w-[89px] h-12 rounded-3xl text-white bg-red hover:bg-light_red"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
