import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Box from "./components/Box";
import Boxes from "./components/Boxes";
import Contact from "./components/Contact";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";

// Import images
import info1 from "./assets/info-1.png";
import info2 from "./assets/info-2.png";
import info3 from "./assets/info-3.png";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <LanguageProvider>
      <PageLoader />
      <Navbar />
      <main className="min-h-[100vh] container px-4 lg:px-8 overflow-hidden">
        <Hero />
        <Info sectionID="o-nama" type="about" image={info1} reverse={true} />
        <Box sectionID="radni-prostor" image={info2} />
        <ImageCarousel />
        <Info
          sectionID="sadrzaj"
          type="content"
          image={info2}
          reverse={false}
        />
        <Info
          sectionID="istorijat"
          type="history"
          image={info3}
          reverse={true}
        />
        <Contact sectionID="kontakt" />
        <Boxes />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
