import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Box = ({ sectionID }) => {
  const { language } = useLanguage();
  const boxData = translations[language].info.workspace;

  const [intro, ...listItems] = boxData.paragraph;

  return (
    <section
      id={sectionID}
      className="bg mt-[20px] lg:mt-[36px] p-[26px] lg:p-[48px] xl:p-[56px] w-full rounded-[36px] text-white"
    >
      <h2 className="text-[20px] lg:text-[32px] xl:text-[48px] font-bold leading-[100%]">
        {boxData.header}
      </h2>

      <div className="text-[12px] lg:text-[16px] xl:text-[20px] mt-3 leading-snug">
        <p className="pb-5">{intro}</p>
        <ul className="list-disc pl-5 space-y-1">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Box;
