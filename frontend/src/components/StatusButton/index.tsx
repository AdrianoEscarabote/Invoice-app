import Image from "next/image";
import { useState } from "react";
import style from "./style.module.css";
import { StatusButtonProps } from "./StatusButtonProps";
import useWindowSize from "@/hooks/useWindowSize";

const StatusButton = ({ statusProp, setStatus }: StatusButtonProps) => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const { screenSize } = useWindowSize();

  return (
    <div className="flex flex-col relative HeadingSVariant text-color2">
      <button
        className={`${style.button} flex items-center gap-[14px] w-full min-w-[136px] py-3`}
        onClick={() => setOptionsOpen(!optionsOpen)}
      >
        {screenSize === "desktop" ? "Filter by Status" : "Filter"}
        <Image
          src={"/assets/icon-arrow-down.svg"}
          alt="icon arrow"
          width={10}
          style={
            optionsOpen
              ? {
                  transform: "rotate(180deg)",
                }
              : {}
          }
          height={10}
        />
      </button>
      {optionsOpen ? (
        <div className="w-[192px] p-6 absolute top-11 -right-7 flex flex-col gap-4  rounded-lg bg-3 z-50 status_shadow">
          <label
            className={`flex items-center gap-3 HeadingSVariant ${style.container}`}
            htmlFor="draft"
          >
            <span className="mt-1">Draft</span>
            <input
              className={`${style.input}`}
              type="checkbox"
              name="draft"
              id="draft"
              onClick={() => setStatus("Draft")}
            />
            <span
              className={`${style.checkmark} bg-status ${
                statusProp === "Draft" ? style.checked : ""
              } bg-2`}
            >
              <div className={`${style.correct}`}>&#x2713;</div>
            </span>
          </label>

          <label
            className={`flex items-center HeadingSVariant gap-3 ${style.container}`}
            htmlFor="pending"
          >
            <span className="mt-1">Pending</span>
            <input
              className={`${style.input}`}
              type="checkbox"
              name="pending"
              id="pending"
              onClick={() => setStatus("Pending")}
            />
            <span
              className={`${style.checkmark} bg-status ${
                statusProp === "Pending" ? style.checked : ""
              } bg-2`}
            >
              <div className={`${style.correct}`}>&#x2713;</div>
            </span>
          </label>

          <label
            className={`flex items-center HeadingSVariant gap-3 ${style.container}`}
            htmlFor="paid"
          >
            <span className="mt-1">Paid</span>
            <input
              className={`${style.input}`}
              type="checkbox"
              name="draft"
              id="paid"
              onClick={() => setStatus("Paid")}
            />
            <span
              className={`${style.checkmark} bg-status ${
                statusProp === "Paid" ? style.checked : ""
              } bg-2`}
            >
              <div className={`${style.correct}`}>&#x2713;</div>
            </span>
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default StatusButton;
