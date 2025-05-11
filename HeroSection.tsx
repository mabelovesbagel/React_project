"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-16 pt-44 pb-24 mt-9 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="-mb-5 ml-24 max-w-full w-[619px] max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full whitespace-nowrap max-md:mt-10">
              <div className="w-full">
                <div className="w-full">
                  <h2 className="text-6xl font-semibold leading-none text-neutral-600 max-md:text-4xl">
                    智心守護
                  </h2>
                  <p className="mt-3 text-3xl leading-none text-gray-800">
                    SmartCare
                  </p>
                </div>
              </div>
              <button className="gap-2.5 self-start px-8 py-3.5 mt-5 text-2xl leading-none text-center text-white bg-blue-500 rounded-3xl max-md:px-5">
                免費下載
              </button>
              <hr className="mt-5 w-64 max-w-full border border-solid border-slate-500 min-h-px" />
              <p className="gap-2.5 self-start p-2.5 mt-5 text-2xl leading-none text-slate-500">
                一起守護您心愛的人
              </p>
            </div>
          </div>
          <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-10 items-center w-full min-h-[330px] max-md:mt-8">
              <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto min-w-60 w-[330px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61975e07b05a9291b7fbb97c11b8f3b63c8edd9?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
                  alt="SmartCare App"
                  className="object-contain self-stretch my-auto aspect-square min-w-60 w-[310px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
