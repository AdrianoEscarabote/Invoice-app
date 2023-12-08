"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ToggleThemeBtn = () => {
  const [iconTheme, setIconTheme] = useState("/assets/icon-moon.svg");

  useEffect(() => {
    handleChangeIconTheme();
    const themeToggle = document.getElementById("theme-toggle");

    const handleToggleClick = () => {
      document.body.classList.toggle("dark-theme");
      handleChangeIconTheme();
    };

    themeToggle?.addEventListener("click", handleToggleClick);

    return () => {
      themeToggle?.removeEventListener("click", handleToggleClick);
    };
  }, []);

  const handleChangeIconTheme = () =>
    document.body.classList.contains("dark-theme")
      ? setIconTheme("/assets/icon-sun.svg")
      : setIconTheme("/assets/icon-moon.svg");

  return (
    <button id="theme-toggle" className="text-color">
      <Image
        src={iconTheme}
        alt={
          iconTheme.includes("sun")
            ? "Sun icon for light mode"
            : "Moon icon for dark mode"
        }
        width={20}
        height={20}
      />
    </button>
  );
};

export default ToggleThemeBtn;
