import Image from "next/image";
import { useState } from "react";
import style from "./style.module.css";

const StatusButton = () => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col relative HeadingSVariant">
      <button
        className="flex items-center gap-3 w-full min-w-[132px] py-3"
        onClick={() => setOptionsOpen(!optionsOpen)}
      >
        Filter by Status
        <Image
          src={"/assets/icon-arrow-down.svg"}
          alt="icon arrow"
          width={10}
          height={10}
        />
      </button>
      {optionsOpen ? (
        <div className="w-[192px] p-6 absolute top-8 flex flex-col gap-2 rounded-lg">
          <label
            className={`flex items-center gap-3 ${style.container}`}
            htmlFor="draft"
          >
            Draft
            <input
              className={`${style.input}`}
              type="checkbox"
              name="draft"
              id="draft"
            />
            <span className={`${style.checkmark}`}></span>
          </label>

          <label
            className={`flex items-center gap-3 ${style.container}`}
            htmlFor="pending"
          >
            Pending
            <input
              className={`${style.input}`}
              type="checkbox"
              name="pending"
              id="pending"
            />
            <span className={`${style.checkmark}`}></span>
          </label>

          <label
            className={`flex items-center gap-3 ${style.container}`}
            htmlFor="paid"
          >
            Paid
            <input
              className={`${style.input}`}
              type="checkbox"
              name="draft"
              id="paid"
            />
            <span className={`${style.checkmark}`}></span>
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default StatusButton;
