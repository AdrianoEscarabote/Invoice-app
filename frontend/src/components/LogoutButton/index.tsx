import Image from "next/image";
import style from "./style.module.css";
import { LogoutButtonProps } from "./LogoutButtonProps";
import { twMerge } from "tailwind-merge";
import useLogout from "@/hooks/useLogout";

const LogoutButton: React.FC<LogoutButtonProps> = ({ className, ...props }) => {
  const { setCallApi } = useLogout();
  const classNameButton = twMerge(
    className,
    `${style.logout_option} flex items-center gap-2 px-3 py-4 bg-2 border border-dark_purple z-30 w-28 rounded-xl cursor-pointer`
  );

  return (
    <button
      onClick={() => setCallApi(true)}
      className={classNameButton}
      {...props}
    >
      <div className={`${style.arrow} bg-2`}></div>
      <Image
        src={"/assets/logout.png"}
        width={32}
        height={32}
        alt="logout icon"
      />
      <p className="text-color2 HeadingS">logout</p>
    </button>
  );
};

export default LogoutButton;
