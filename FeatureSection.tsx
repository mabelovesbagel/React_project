"use client";
import React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: "left" | "right";
  extraImage?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imagePosition,
  extraImage,
}) => {
  const ImageComponent = () => (
    <img
      src={imageSrc}
      alt={title}
      className="object-contain self-stretch my-auto aspect-[0.53] min-w-60 w-[315px]"
    />
  );

  const TextComponent = () => (
    <article className="self-stretch my-auto w-64 min-h-[72px] min-w-60">
      <h3 className="text-2xl text-black">{title}</h3>
      <div className="mt-5 w-full text-base text-slate-500">
        <hr className="w-full border border-solid border-slate-500 min-h-px" />
        <p className="mt-2">{description}</p>
      </div>
    </article>
  );

  // Special case for the AI feature section with extra image
  if (extraImage) {
    return (
      <div className="flex flex-col items-center pt-11 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-end whitespace-nowrap max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center min-w-60 max-md:max-w-full">
            <article className="self-stretch my-auto w-64 h-[100px] min-w-60">
              <h3 className="text-2xl text-black">{title}</h3>
              <div className="mt-5 w-full text-base text-slate-500">
                <hr className="w-full border border-solid border-slate-500 min-h-px" />
                <p className="mt-2">{description}</p>
              </div>
            </article>
            <img
              src={imageSrc}
              alt={title}
              className="object-contain self-stretch my-auto aspect-[0.56] min-w-60 w-[278px]"
            />
          </div>
          <img
            src={extraImage}
            alt="Additional feature"
            className="object-contain shrink-0 aspect-square w-[193px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex z-10 flex-wrap gap-10 items-center self-center mt-0 whitespace-nowrap max-md:max-w-full">
      {imagePosition === "left" ? (
        <>
          <ImageComponent />
          <TextComponent />
        </>
      ) : (
        <>
          <TextComponent />
          <ImageComponent />
        </>
      )}
    </div>
  );
};

export default FeatureSection;
