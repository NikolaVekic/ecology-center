import React, { useState, useRef, useEffect } from "react";
import logoSRB from "../assets/logo.png";
import logoENG from "../assets/logoENG.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const logo = language === "ENG" ? logoENG : logoSRB;
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef(null);

  const navLinks = [
    { label: translations[language].navbar.workspace, href: "#radni-prostor" },
    { label: translations[language].navbar.about, href: "#o-nama" },
    { label: translations[language].navbar.content, href: "#o-profesoru" },
    { label: translations[language].navbar.history, href: "#oznaka-kvaliteta" },
    { label: translations[language].navbar.contact, href: "#kontakt" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLangMenu = () => setLangMenuOpen((prev) => !prev);
  const selectLang = (lang) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-2xs">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex w-full max-w-[1440px] items-center justify-between py-5">
          <a href="/">
            <img
              src={logo}
              alt="Website Logo"
              className="h-[60px] xl:h-[78px]"
            />
          </a>

          <nav className="hidden [@media(min-width:821px)]:flex gap-6 xl:gap-12 items-center">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-[#08994D] text-[16px] xl:text-[24px]"
              >
                {link.label}
              </a>
            ))}
            <div className="relative" ref={langRef}>
              <button
                onClick={toggleLangMenu}
                className="flex items-center gap-1 cursor-pointer"
              >
                <span className="text-[16px] xl:text-[24px]">{language}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    langMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border shadow-md z-10 text-[16px] xl:text-[24px]">
                  <div
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectLang("SRB")}
                  >
                    SRB
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectLang("ENG")}
                  >
                    ENG
                  </div>
                </div>
              )}
            </div>
          </nav>

          <button
            className="[@media(min-width:821px)]:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-[#007336]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-70 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMenu}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-3/5 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } [@media(min-width:821px)]:hidden`}
        >
          <div className="p-4 flex justify-between">
            <h3 className="text-[1.5rem] font-medium text-[#007336]">Meni</h3>
            <button onClick={closeMenu} aria-label="Close menu">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col text-right px-4">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={closeMenu}
                className="text-[1.25rem] py-3 border-b border-gray-200"
              >
                {link.label}
              </a>
            ))}
            <div className="text-[1.25rem] py-3 flex justify-end gap-4">
              <span
                className="cursor-pointer"
                onClick={() => selectLang("SRB")}
              >
                SRB
              </span>
              |
              <span
                className="cursor-pointer"
                onClick={() => selectLang("ENG")}
              >
                ENG
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
