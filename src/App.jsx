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
import About from "./components/About";

// Import images
import info1 from "./assets/info1.jpg";
import info2 from "./assets/info-2.png";
import info3 from "./assets/info-3.png";
import info4 from "./assets/info-4.png";
import info5 from "./assets/info-5.png";
import about from "./assets/about.png";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <LanguageProvider>
      <PageLoader />
      <Navbar />
      <main className="min-h-[100vh] container px-4 lg:px-8 overflow-hidden">
        <Hero />
        <Box sectionID="radni-prostor" image={info2} />
        <ImageCarousel />
        <Info sectionID="o-nama" type="about" image={info1} reverse={true} />
        <Info type="about2" image={info4} reverse={false} />
        <Info
          sectionID="oznaka-kvaliteta"
          type="content"
          image={info3}
          reverse={true}
        />

        {/* <About /> */}
        <About sectionID="o-profesoru" type="professor" image={about} />
        <Info type="location" image={info5} />
        <Contact sectionID="kontakt" image={info2} reverse={false} />
        <Boxes />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
