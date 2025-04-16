import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const About = ({ type, image, sectionID }) => {
  const { language } = useLanguage();
  const infoData = translations[language]?.info?.[type];

  if (!infoData) return null;

  return (
    <section id={sectionID} className="w-full flex flex-col py-[20px]">
      <div className="flex flex-col gap-[28px]">
        {infoData.header && (
          <h2 className="text-[28px] lg:text-[48px] font-bold text-[#083A03] leading-[100%] text-center lg:text-left">
            {infoData.header}
          </h2>
        )}
        <p className="text-[#083A03] text-[12px] lg:text-[16px] xl:text-[20px] whitespace-pre-line text-center lg:text-left">
          {infoData.paragraph}
        </p>
        {infoData.quote && (
          <p className="text-[#083A03] text-[14px] lg:text-[18px] xl:text-[24px] font-bold text-center lg:text-left">
            {infoData.quote}
          </p>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt={infoData.header || "About image"}
          className="rounded-[36px] mt-[38px]"
        />
      )}
    </section>
  );
};

export default About;
