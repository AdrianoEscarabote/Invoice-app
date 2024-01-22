import { twMerge } from "tailwind-merge";
import { NewItemButtonProps } from "./NewItemButtonProps";

const NewItemButton = ({
  onClick,
  "aria-label": ariaLabel,
  className,
  ...props
}: NewItemButtonProps) => {
  const buttonClassName = twMerge(
    className,
    "HeadingSVariant text-color3 rounded-3xl bg-3 w-full h-12 newitemhover"
  );
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={buttonClassName}
      {...props}
    >
      + Add New Item
    </button>
  );
};

export default NewItemButton;
