"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-center ml-3.5 w-full text-3xl font-semibold leading-none whitespace-nowrap max-w-[1247px] text-neutral-600 max-md:max-w-full">
      <h1 className="gap-3 self-stretch text-neutral-600">SmartCare</h1>
      <nav className="flex gap-10 items-center self-start">
        <a href="#features" className="self-stretch my-auto text-neutral-600">
          功能
        </a>
        <a href="#download" className="self-stretch my-auto text-neutral-600">
          下載
        </a>
        <a href="#team" className="self-stretch my-auto text-neutral-600">
          團隊
        </a>
      </nav>
    </header>
  );
};

export default Header;
