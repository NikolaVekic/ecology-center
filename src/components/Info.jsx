import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const InfoSection = ({ sectionID, type, image, reverse = false }) => {
  const { language } = useLanguage();
  const infoData = translations[language].info[type];
  let parts = [];
  if (infoData.highlightText) {
    parts = infoData.paragraph.split(infoData.highlightText);
  }

  return (
    <section
      id={sectionID}
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-4 md:gap-6 lg:gap-10 py-6 md:py-8 lg:py-16`}
    >
      {/* TEXT */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-[640px] px-3 md:px-4 lg:px-0 text-center lg:text-left gap-4 md:gap-6">
        <h2 className="text-[24px] md:text-[28px] lg:text-[48px] font-bold text-[#083A03] leading-[100%]">
          {infoData.header}
        </h2>

        <p className="text-[#083A03] text-[11.5px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          {infoData.highlightText ? (
            <>
              {parts[0]}
              <span className="font-semibold">{infoData.highlightText}</span>
              {parts[1]}
            </>
          ) : (
            infoData.paragraph
          )}
        </p>

        {infoData.buttonTitle && infoData.buttonLink && (
          <a
            href={infoData.buttonLink}
            className="btn-secondary m-auto lg:m-0 w-[210px] md:w-[180px] lg:w-fit text-center"
          >
            {infoData.buttonTitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < infoData.buttonTitle.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </a>
        )}

        {infoData.quote && (
          <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] text-[#083A03] font-bold">
            {infoData.quote}
          </p>
        )}
      </div>

      {/* IMAGE */}
      {image && (
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <img
            src={image}
            alt={infoData.header}
            className="rounded-[24px] w-[300px] h-[220px] md:w-[360px] md:h-[270px] lg:w-[480px] lg:h-[360px] xl:w-[720px] xl:h-[540px] shadow-sm"
          />
        </div>
      )}
    </section>
  );
};

export default InfoSection;
