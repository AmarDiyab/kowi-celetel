import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
      <div className="">
        <button onClick={handleToggle}>
          <i className="fa-solid fa-caret-down text-base text-gray-500"></i>
        </button>
        <div
          className={
            (showDropdown ? "block " : "hidden ") +
            "bg-white absolute top-6 -left-4 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          }
          style={{ minWidth: "12rem" }}
        >
          <div
            className={
              "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            }
          >
            Action 1
          </div>
          <div
            className={
              "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            }
          >
            Action 2
          </div>
          <div
            className={
              "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            }
          >
            Action 3
          </div>
        </div>
      </div>
  );
}
