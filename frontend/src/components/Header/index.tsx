import Image from "next/image";
import style from "./style.module.css";
import ToggleThemeBtn from "../ToggleThemeBtn";
import { useState } from "react";
import LogoutButton from "../LogoutButton";

const Header = () => {
  const [showLogoutOption, setShowLogoutOption] = useState<boolean>(false);
  return (
    <header
      className={`${style.header} w-full max-w-[103px] min-h-screen header-color rounded-r-[20px] justify-between flex flex-col`}
    >
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

      <div
        className={`${style.content} relative flex items-center justify-center flex-col gap-8`}
      >
        <ToggleThemeBtn />

        <div
          className={`${style.wrapper_avatar} border-t border-[#494E6E] w-full flex items-center justify-center py-6`}
        >
          <button
            aria-label={
              showLogoutOption ? "show logout button" : "hide logout button"
            }
            onClick={() => setShowLogoutOption(!showLogoutOption)}
          >
            <Image
              src={"/assets/image-avatar.jpg"}
              alt="image avatar"
              width={40}
              className="rounded-full"
              height={40}
            />
          </button>
        </div>
        {showLogoutOption ? (
          <div className="absolute -right-4 top-16">
            <LogoutButton />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
