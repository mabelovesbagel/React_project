"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center self-stretch mt-72 w-full bg-white min-h-[279px] max-md:mt-10 max-md:max-w-full">
      <div className="flex items-center max-w-full w-[1304px]">
        <div className="flex gap-10 items-center self-stretch my-auto min-w-60">
          <h3 className="self-stretch my-auto text-2xl font-semibold leading-none text-slate-500 w-[172px]">
            追蹤Smartcare
          </h3>
          <div className="flex gap-1.5 items-center self-stretch my-auto">
            <a href="#" aria-label="Social media link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22bf82ec06e8e6714066844fa1e8819c9a505711?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
                alt="Social media icon"
                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
              />
            </a>
            <a href="#" aria-label="Social media link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ddb4f572847d1daf17bbf495a7f9abbab823ce?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
                alt="Social media icon"
                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-9 max-w-full min-h-0 border border-solid border-slate-500 w-[1265px]" />
      <p className="mt-9 text-2xl font-semibold leading-none text-black max-md:max-w-full">
        © 2025 SmartCare All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
