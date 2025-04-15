import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact = ({ sectionID }) => {
  const { language } = useLanguage();
  const headerText = language === "ENG" ? "Contact" : "Kontakt";

  return (
    <section id={sectionID} className="bg-[#fff]">
      <div className="container relative mx-auto">
        <h2
          className="
    absolute top-[-16px] lg:top-[28px] left-1/2 -translate-x-1/2 text-center
    lg:left-8 lg:translate-x-0 lg:text-left
    text-[28px] lg:text-[48px] font-bold text-[#083A03] z-10
  "
        >
          {headerText}
        </h2>
      </div>
      <div className="relative w-screen left-1/2 -translate-x-1/2 contact-bg">
        <div
          className="w-full max-w-[1440px] mx-auto flex justify-center items-center px-4
                     h-[340px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[940px]"
        >
          <div
            className="w-[370px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1300px]
                       h-[200px] sm:h-[240px] md:h-[340px] lg:h-[425px] xl:h-[468px]
                       rounded-[36px] overflow-hidden shadow-md bg-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.2528886489367!2d19.934729300000004!3d45.2022179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b04af80587bc1%3A0x968f468d3584b784!2sEco%20Centre%20Radulova%C4%8Dki!5e0!3m2!1sen!2srs!4v1744041642049!5m2!1sen!2srs"
              className="w-full h-full border-0 rounded-[36px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
