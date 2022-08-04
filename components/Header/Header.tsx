import React from "react";
// import Logo from "../Logo";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3">
      <Logo />

      <div className="flex items-center gap-5 md:gap-8">
        <span className="relative md:scale-110 cursor-pointer  before:-top-1 before:-bottom-1 before:-left-1 before:-right-1 before:hover:bg-[#484B6A] before:absolute before:-z-10 before:rounded " >
        {/* <span className="relative md:scale-110 hover:bg-[#484B6A]/10 hover:p-2 cursor-pointer hover:rounded-full "> */}
          <span className="absolute w-2 h-2 rounded-full bg-[#484B6A] right-0 top-0 translate-x-[6px] -translate-y-[6px]"></span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="7"
              height="7"
              rx="1"
              stroke="#D2D3DB"
              stroke-linecap="round"
            />
            <rect
              x="3"
              y="14"
              width="7"
              height="7"
              rx="1"
              stroke="#D2D3DB"
              stroke-linecap="round"
            />
            <rect
              x="14"
              y="3"
              width="7"
              height="7"
              rx="1"
              stroke="#D2D3DB"
              stroke-linecap="round"
            />
            <path
            // className="hover:bg-red-400"
              d="M17.5 14.0002L17.5 21.0004"
              stroke="#D2D3DB"
              stroke-linecap="round"
            />
            <path
              d="M21.0001 17.5001L13.9999 17.5001"
              stroke="#D2D3DB"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <button className="py-1 px-4 bg-[#484B6A] text-[#fff] hover:opacity-95 hover:scale-95">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
