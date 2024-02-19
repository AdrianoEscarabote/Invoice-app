import Image from "next/image";
import { InvoiceButtonProps } from "./InvoiceButtonProps";
import { twMerge } from "tailwind-merge";
import useWindowSize from "@/hooks/useWindowSize";

const InvoiceButton: React.FC<InvoiceButtonProps> = ({
  onClick,
  className,
  "aria-label": ariaLabel,
  ...props
}) => {
  const buttonClassName = twMerge(
    "HeadingSVariant bg-dark_purple hover:bg-light_purple text-white flex items-center  rounded-3xl gap-3 w-full max-w-[150px] h-12 p-2",
    className
  );
  const { screenSize } = useWindowSize();
  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="bg-white p-3 rounded-full w-8 h-8">
        <Image
          alt="icon plus"
          src="/assets/icon-plus.svg"
          width={22}
          height={22}
        />
      </div>
      {screenSize === "desktop" ? "New Invoice" : "New"}
    </button>
  );
};

export default InvoiceButton;
