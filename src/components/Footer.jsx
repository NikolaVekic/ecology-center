import React from "react";
import insta from "../assets/insta.svg";
import fb from "../assets/fb.svg";
import footerImg1 from "../assets/footerImg1.png";
import footerImg2 from "../assets/footerImg2.png";
import footerImg3 from "../assets/footerImg3.png";

const Footer = () => {
  return (
    <footer className="bg mt-[40px] py-[50px] w-full">
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        {/* Text Block */}
        <div className="flex flex-col text-[#fff] text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-[12px] lg:text-[16px] xl:text-[20px] font-bold">
            Mitropolita Stratimirovića 5, Sremski Karlovci, AP Vojvodina, Srbija
          </h3>
          <p className="text-[12px] lg:text-[16px] xl:text-[20px]">
            <a href="tel:+381600881027" className="hover:underline">
              +381 060 0422 920
            </a>
          </p>
          <p className="text-[12px] lg:text-[16px] xl:text-[20px]">
            <a href="tel:+38121881027" className="hover:underline">
              +381 21 881 027
            </a>
          </p>
          <p className="text-[12px] lg:text-[16px] xl:text-[20px]">
            <span className="font-bold">e-mail: </span>
            <a
              href="mailto:office@ekoloskicentar.org"
              className="hover:underline"
            >
              office@ekoloskicentar.org
            </a>
          </p>
        </div>
        {/* Icons & Logos */}
        <div className="flex flex-col gap-[20px] md:flex-row md:gap-[60px] justify-center items-center">
          <div className="flex gap-[18px] justify-center">
            <a href="https://www.facebook.com/ekoloskicentar" target="_blank">
              <img
                src={fb}
                alt="Facebook logo"
                className="w-[20px] lg:w-[28px] xl:w-[40px] cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/pokretgoranavojvodine/"
              target="_blank"
            >
              <img
                src={insta}
                alt="Instagram logo"
                className="w-[20px] lg:w-[28px] xl:w-[40px] cursor-pointer"
              />
            </a>
          </div>
          <div className="flex gap-[18px] justify-center">
            <img
              src={footerImg1}
              alt="Logo 1"
              className="w-[40px] lg:w-[80px] xl:w-[120px]"
            />
            <img
              src={footerImg3}
              alt="Logo 3"
              className="w-[40px] lg:w-[80px] xl:w-[120px]"
            />
            <img
              src={footerImg2}
              alt="Logo 2"
              className="w-[40px] lg:w-[80px] xl:w-[120px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
