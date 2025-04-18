import React from "react";
import hero from "../assets/hero.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="flex flex-col lg:flex-row relative pt-[60px] gap-[28px] md:pt-[80px] md:pb-2 lg:pb-6 xl:pb-8">
      <div className="flex flex-col justify-center items-center lg:items-start lg:h-[525px]">
        <div className="w-full max-w-[680px] text-center lg:text-left">
          <p className="text-[#093A04] text-[16px] md:text-[24px] lg:text-[28px] xl:text-[34px] lg:pb-2">
            {t.welcome}
          </p>
          <h1 className="text-[#083A03] font-bold text-[24px] leading-[36px] md:text-[40px] md:leading-[48px] lg:text-[60px] lg:leading-[72px] xl:text-[70px] xl:leading-[88px]">
            {t.title}
          </h1>
          <div className="pt-[18px] lg:pt-[28px] xl:pt-[40px] flex items-center justify-center lg:justify-start gap-[16px]">
            <a href="#kontakt" className="btn-primary">
              {t.buttons.kontakt}
            </a>
            <a href="#o-nama" className="btn-secondary">
              {t.buttons.sadrzaj}
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src={hero}
          alt="Ekološki centar Radulovački"
          className="block mx-auto transition-all duration-500 ease-in-out w-[380px] h-[240px] md:w-[400px] md:h-[250px] lg:absolute lg:top-1/2 lg:right-[-18vw] xl:right-[-12vw] lg:translate-y-[-50%] lg:w-[690px] lg:h-[420px] 2xl:relative 2xl:right-0 2xl:top-1/2 2xl:translate-y-[-50%] 2xl:mx-0 2xl:w-[760px] 2xl:h-[505px]"
        />
      </div>
    </div>
  );
};

export default Hero;
