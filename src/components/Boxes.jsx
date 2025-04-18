import React from "react";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Boxes = () => {
  const { language } = useLanguage();
  const boxesText = translations[language].boxes;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg mt-5 p-[26px] lg:p-[38px] xl:p-[50px] w-full rounded-[36px] text-white">
        <p className="text-[12px] lg:text-[24px] xl:text-[36px]">
          {boxesText.inquiryText}
        </p>
      </div>
      <div className="flex flex-row-reverse gap-[20px] lg:gap-[40px] mt-[18px] lg:mt-[30px]">
        {/* Email Box */}
        <div className="bg flex justify-center items-center gap-1 md:gap-2 p-[14px] w-full rounded-[36px] text-white">
          <img
            src={mail}
            alt="Mail icon"
            className="w-[24px] lg:w-[48px] xl:w-[72px]"
          />
          <p className="text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px]">
            <a
              href="mailto:office@ekoloskicentar.org"
              className="hover:underline"
            >
              office@ekoloskicentar.org
            </a>
          </p>
        </div>
        {/* Phone Box */}
        <div className="bg flex justify-center items-center gap-1 md:gap-2 p-[14px] w-full rounded-[36px] text-white">
          <img
            src={phone}
            alt="Phone icon"
            className="w-[24px] lg:w-[48px] xl:w-[72px]"
          />
          <div>
            <p className="text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px]">
              <a href="tel:+3810600881027" className="hover:underline">
                +381 060 0422 920
              </a>
            </p>
            <p className="text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px]">
              <a href="tel:+38121881027" className="hover:underline">
                +381 21 881 027
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Start Button */}
      <div className="flex items-center justify-center gap-[20px] lg:gap-[40px] mt-[18px] lg:mt-[30px]">
        <button
          onClick={scrollToTop}
          className="bg flex cursor-pointer px-8 py-[14px] justify-center items-center gap-1 md:gap-2 rounded-[36px] text-white"
        >
          <span className="text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px]">
            {boxesText.startButton}
          </span>
        </button>
      </div>
    </>
  );
};

export default Boxes;
