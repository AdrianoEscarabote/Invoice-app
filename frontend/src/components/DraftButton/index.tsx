import { twMerge } from "tailwind-merge";
import { DraftButtonProps } from "./DraftButtonProps";

const DraftButton: React.FC<DraftButtonProps> = ({ className, ...props }) => {
  const classNameButton = twMerge(
    className,
    "HeadingSVariant draft-btn w-full h-12 max-w-[133px] rounded-3xl"
  );

  return (
    <button className={classNameButton} {...props}>
      Save as Draft
    </button>
  );
};

export default DraftButton;
