import Image from "next/image";
import style from "./style.module.css";
import ToggleThemeBtn from "../ToggleThemeBtn";

const Header = () => {
  return (
    <header className="w-full max-w-[103px] min-h-screen header-color rounded-r-[20px] justify-between flex flex-col">
      <div
        className={`${style.wrapper_img} z-10 relative bg-dark_purple w-full rounded-r-[20px] h-[103px] grid place-content-center`}
      >
        <Image
          src={"/assets/logo.svg"}
          className="z-10"
          alt="logo"
          width={40}
          height={32}
        />
      </div>

      <div className="flex items-center justify-center flex-col gap-8">
        <ToggleThemeBtn />

        <div className="border-t border-[#494E6E] w-full flex items-center justify-center py-6">
          <Image
            src={"/assets/image-avatar.jpg"}
            alt="avatar image"
            width={40}
            className="rounded-full"
            height={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
