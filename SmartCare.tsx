"use client";
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

const SmartCare: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-16 bg-white">
      <Header />
      <HeroSection />

      {/* Feature Sections */}
      <section className="flex flex-col items-center">
        <FeatureSection
          title="切換模式"
          description="在初次登入app時，使用者即可選擇照護者或是被照護者模式"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/23fa1364a2260056f9d07d610a76625dc0197321?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
          imagePosition="left"
        />

        <FeatureSection
          title="AI方言語音界面"
          description="照護者可用中文向AI方言語音小幫手與被照護者對話，AI方言語音小幫手會將對話内容翻譯成方言並且傳送到被照護者的手機。"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8a9a35bac547b07be429c4ac7453a17382041692?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
          imagePosition="right"
          extraImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b7af9a2b38d8c18653806532715a5355cfcc89ea?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
        />

        <FeatureSection
          title="長者友善的使用者介面"
          description="簡單直覺、大字清晰、語音操作，確保使用方便與安全。"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/48aaa534a112768f50bd20d5545c5e1508619735?placeholderIfAbsent=true&apiKey=9570ea4e42044ecf967d887c803d4363"
          imagePosition="left"
        />
      </section>

      <Footer />
    </main>
  );
};

export default SmartCare;
