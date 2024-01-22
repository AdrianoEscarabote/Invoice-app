import { useState } from "react";
import { DropdownProps } from "./DropdownProps";
import Image from "next/image";
import style from "./style.module.css";

const Dropdown = ({ day }: DropdownProps) => {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [dayState, setDayState] = useState(day);

  const handleChangeDayState = (param: "1" | "7" | "14" | "30") => {
    setDayState(param);
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="flex flex-col max-w-[240px] w-full relative">
      <p className="mb-[9px] BodyVariant text-color3">Payment Terms</p>
      <button
        className={`${style.button}
        ${
          dropdownActive && `${style.active}`
        } rounded bg-2 border border-form-input focus:border-light_purple text-color2 h-12 HeadingSVariant w-full flex items-center justify-between px-4`}
        onClick={() => setDropdownActive(!dropdownActive)}
        type="button"
      >
        Net {dayState} {dayState === "1" ? " Day" : "Days"}
        {dropdownActive ? (
          <Image
            alt="icon arrow down"
            src={"/assets/icon-arrow-down.svg"}
            style={{
              transform: "rotate(180deg)",
            }}
            width={8}
            height={5}
          />
        ) : (
          <Image
            alt="icon arrow up"
            src={"/assets/icon-arrow-down.svg"}
            width={8}
            height={5}
          />
        )}
      </button>
      {dropdownActive && (
        <ul
          className={`absolute top-20 w-full flex flex-col text-color2 gap-1 rounded-lg border-dropdown  HeadingSVariant bg-2`}
        >
          <li>
            <button
              className="h-12 w-full text-start px-6 hover:text-dark_purple"
              onClick={() => handleChangeDayState("1")}
              type="button"
            >
              Net 1 Day
            </button>
          </li>
          <li>
            <button
              className={`h-12 w-full ${style.bt} text-start px-6 hover:text-dark_purple`}
              onClick={() => handleChangeDayState("7")}
              type="button"
            >
              Net 7 Days
            </button>
          </li>
          <li>
            <button
              className={`h-12 w-full ${style.bt} text-start px-6 hover:text-dark_purple`}
              onClick={() => handleChangeDayState("14")}
              type="button"
            >
              Net 14 Days
            </button>
          </li>
          <li>
            <button
              className={`h-12 w-full ${style.bt} text-start px-6 hover:text-dark_purple`}
              onClick={() => handleChangeDayState("30")}
              type="button"
            >
              Net 30 Days
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
