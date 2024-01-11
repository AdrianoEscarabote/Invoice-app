import Image from "next/image";
import style from "./style.module.css";
import ToggleThemeBtn from "@/components/ToggleThemeBtn";

const HeaderLoginSignup = () => {
  return (
    <header className="header-color rounded-e-[20px] flex flex-col items-center justify-between gap-3 w-full absolute left-0 top-0 max-w-[103px] min-h-screen">
      <div
        className={`${style.wrapper_img} z-10 relative bg-dark_purple w-full rounded-e-[20px] h-[103px] grid place-content-center`}
      >
        <Image
          src={"/assets/logo.svg"}
          className="z-10"
          alt="logo"
          width={40}
          height={32}
        />
      </div>
      <div className="px-5 py-8 border-t border-[#494E6E] w-full flex items-center justify-center">
        <ToggleThemeBtn />
      </div>
    </header>
  );
};

export default HeaderLoginSignup;
