import { twMerge } from "tailwind-merge";
import { ButtonFormProps } from "./ButtonFormProps";
import style from "./style.module.css";
import LoadingComponent from "../LoadingComponent";

const ButtonForm: React.FC<ButtonFormProps> = ({
  label,
  disabled,
  maxWidth,
  className,
  showLoadingComponent,
  ...props
}) => {
  const buttonClassName = twMerge(
    `${style.button}
    ${showLoadingComponent ? style.loading : ""}
     ${
       disabled ? style.disabled : ""
     } HeadingS min-h-[46px] w-full relative rounded-lg text-white bg-dark_purple hover:bg-light_purple
    ${showLoadingComponent ? `bg-light_purple opacity-75 ${style.shadow}` : ""}
    `,
    className
  );

  return (
    <button
      style={{ maxWidth: maxWidth ? maxWidth : "" }}
      className={buttonClassName}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {showLoadingComponent ? <LoadingComponent /> : label}
    </button>
  );
};

export default ButtonForm;
